
import connectToDatabase from '@/database/db';
import { NextApiRequest, NextApiResponse } from 'next';

// Define a global variable to store the current project ID
let currentProjectId: number | null = null;

// Define a global array to store the projects
const projects: { projectname: string; projectdesc: string; userID: string }[] = [];
// get the user collection
// POST method to create a new project
export const createProject = async (req: NextApiRequest, res: NextApiResponse) => {

    const { db } = await connectToDatabase();
    const collection = db.collection('projects');
    const pagesCollection = db.collection('pages');
    
    const { projectname, projectdesc, userID } = req.body;
    console.log(userID)
    const newProject = await collection.insertOne({projectname, projectdesc, userID });
    
    const projectId = newProject.insertedId as string;
       // Create index page for the project
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
    
    res.status(201).json(newProject);
};

export const getProjects = async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();
    const collection = db.collection('projects');
    const projects = await collection.find({}).toArray();
    res.json(projects);
  };

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'POST':
            createProject(req, res);
            break;
        case 'GET':
            getProjects(req,res);
            break
        default:
            res.status(405).end();
            break;
    }
}
