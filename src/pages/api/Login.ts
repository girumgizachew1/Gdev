import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import connectToDatabase from '../../database/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // connect to the database
    const { db } = await connectToDatabase();

    // get the user collection
    const collection = db.collection('users');

    // get the user data from the request body
    const { email, password } = req.body;
console.log(email)
    // find the user with the provided email
    const user = await collection.findOne({ email });

    // if the user doesn't exist, return a 404 Not Found error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // if the passwords don't match, return a 401 Unauthorized error
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // generate a JWT token
    const token = jwt.sign({ userId: user._id }, 'my-secret-key', { expiresIn: '1h' });

    // return the token to the client
    res.status(200).json({ message: 'Login successful', token });
  } else {
    // return 405 Method Not Allowed for any other HTTP methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
