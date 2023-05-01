import { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '../../database/db';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      // connect to the database
      const { db } = await connectToDatabase();
  
      // get the user collection
      const collection = db.collection('users');
  
      // get the user data from the request body
      const { name, email, password } = req.body;
  

      // insert the new user into the database
      const result = await collection.insertOne({ name, email, password });
      // return the inserted user data
     res.status(201).json(result);
    } else {
      // return 405 Method Not Allowed for any other HTTP methods
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  