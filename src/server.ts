import express from 'express';
import "./database";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Ola mundo"});
});

app.listen(3333, () => console.log("Opening the gates"))