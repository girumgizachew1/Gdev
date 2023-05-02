import { getSession } from 'next-auth/react';
import connectToDatabase from '../../database/db';

import { NextApiRequest, NextApiResponse } from 'next';

export default async function userHandler(req: NextApiRequest, res: NextApiResponse) {

    // connect to the database
    const { db } = await connectToDatabase();

    // get the user collection
    const collection = db.collection('users');
    // Ensure only authenticated users can access this route
    const session = await getSession({ req });
 
    if (!session) {
        res.status(401).json({ message: 'Unauthorizedd' });
        return;
    }

    if (req.method !== 'GET') {
        res.status(405).json({ message: 'Method not allowed' });
        return;
    }

    const userId = req.query.userId;
    console.log(userId)

    try {
        const user = await collection.users.findUnique({
            where: {
                id: userId,
            },
        });

        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
