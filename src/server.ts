import express from 'express';
import mongoose from "mongoose";
import { routeConstants } from './config/route.constants';
import linkRoutes from "./routes/link.routes";
import urlRoutes from "./routes/url.routes";
require('dotenv').config()
const getMongoDbUrl = () => {
    if (process.env.NODE_ENV === "production") {
        return `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
    } else {
        return `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    }
}

mongoose
    .connect(getMongoDbUrl(), { useNewUrlParser: false })
    .then(() => {
        const app = express()
        app.use(express.json())
        app.use(express.urlencoded({
            extended: true
        }));
        app.use(routeConstants.API, linkRoutes);
        app.use(routeConstants.URL, urlRoutes)
        app.listen(process.env.PORT, () => {
            console.log("Server has started! at Port", process.env.PORT)
        })
    })
