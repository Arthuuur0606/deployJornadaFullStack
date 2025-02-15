import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://alacerda235:12ZMXN7jZpH0wOkF@cluster0.2h2ou.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const database = client.db("spotify_aula");
// const songCollection = await database.collection("songs").find({}).toArray();

// console.log(songCollection);
