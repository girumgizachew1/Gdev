
import connectToDatabase from '@/database/db';
import { NextApiRequest, NextApiResponse } from 'next';

// Define a global variable to store the current project ID
let currentProjectId: number | null = null;

// Define a global array to store the projects
const projects: { projectname: string; projectdesc: string; userId: any }[] = [];


// get the user collection
// POST method to create a new project
export const createProject = async (req: NextApiRequest, res: NextApiResponse) => {

    const { db } = await connectToDatabase();
    const collection = db.collection('projects');
    const { projectname, projectdesc, userId } = req.body;
    const newProject = await collection.insertOne({projectname, projectdesc, userId });
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
