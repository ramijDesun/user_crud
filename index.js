import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/userRoute.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 5000;

const URL = process.env.MONGOURL + "/user-crud";

mongoose.connect(URL)
    .then(() => {
        console.log('Database connected successfully');

        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        })
    })
    .catch((err) => console.log(err))

app.use("/api", route);

app.use("/", (req, res) => {
    res.status(200).send("Welcome to the server! Everything is running smoothly.");
})