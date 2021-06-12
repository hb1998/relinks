import express from 'express';
import mongoose from "mongoose";
const app = express();

app.get('/', (req, res) => {
    res.send("hello");
})

mongoose
    .connect("mongodb://localhost:27017/relinks", { useNewUrlParser: true })
    .then(() => {
        const app = express()

        app.listen(5000, () => {
            console.log("Server has started!")
        })
    })

