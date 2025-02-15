import express from "express";
import cors from "cors";
import { database } from "./connect.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.get("/", (request, response) => {
  response.send("Servidor está trabalhando em /songs e /artists");
});
app.get("/artists", async (request, response) => {
  response.send(await database.collection("artists").find({}).toArray());
});
app.get("/songs", async (request, response) => {
  response.send(await database.collection("songs").find({}).toArray());
});
app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
