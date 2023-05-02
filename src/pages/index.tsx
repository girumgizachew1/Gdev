import Image from 'next/image'
import { Inter } from 'next/font/google'
import Editor from './Editor'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [user, setUser] = useState(null)

  
  useEffect(() => {
    // get the session token from localStorage or cookies
    const token = sessionStorage.getItem('token');
    console.log('token:'+ token)
    if (token) {
      // decode the token to get the user ID
      const { userId }:any = jwtDecode(token)
      console.log('userID:'+ userId)

      axios({
        method: 'get',
        url: '/api/user',
        headers: { Authorization: `Bearer ${token}` },
        params: { userId }
      })
        .then(response => {
          // set the user data in state
          setUser(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }, [])
  return (
    <div>
      <Head>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
        <meta name="keywords" content="keywords" />
        <meta name="author" content="author name" />
        {/* other meta tags */}
      </Head>
      {user ? (
        <Editor />
      ) : (
        <p>Please log in to access the editor.</p>
      )}
    </div>
  )
}
