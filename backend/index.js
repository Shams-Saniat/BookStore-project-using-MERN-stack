import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send('Welcome to MERN Stack Project');
});

// Route for Save a new Book

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App conected to the database');
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
