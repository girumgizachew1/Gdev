import connectToDatabase from '@/database/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
export const addPage = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { db } = await connectToDatabase();
    const pagesCollection = db.collection('pages');

    const { projectId } = req.body;

    const page = {
      projectId,
      name: 'index',
      html: `<!DOCTYPE html>
        <html>
          <head>
            <title>My New Page</title>
            <link rel="stylesheet" type="text/css" href="index.css">
          </head>
          <body>
            <h1>Welcome to my new page!</h1>
          </body>
        </html>`,
      css: `body {
          background-color: white;
          color: black;
        }
        
        h1 {
          font-size: 2rem;
          text-align: center;
        }`
    };

    const newPage = await pagesCollection.insertOne(page);

    res.status(201).json(newPage);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getPages = async (req: NextApiRequest, res: NextApiResponse) => {
    const projectId = req.query.projectId as string;
  
    if (!projectId) {
      return res.status(400).json({ error: 'Missing project ID' });
    }
  
    try {
      const { db } = await connectToDatabase();
      const pagesCollection = db.collection('pages');
      const projectIdObj = new ObjectId(projectId);
      const pages = await pagesCollection.find({ projectId:projectIdObj}).toArray();
      return res.json(pages); 
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to get pages' });
    }
  };
  

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      addPage(req, res);
      break;
    case 'GET':
      getPages(req, res);
      break;
    default:
      res.status(405).end();
      break;
  }
}
