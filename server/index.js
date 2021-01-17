import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = process.env.PORT|| 5000;
app.get("/", (req, res) => {
    res.status(200).send("test");
  });

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });