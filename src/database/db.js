import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://girumgizachew:giri1234@cluster0.cjp6xxu.mongodb.net/?retryWrites=true&w=majority";

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db('Gdev');

  cachedClient = { client, db };

  return cachedClient;
}

export default connectToDatabase;