import express from 'express';
import mongoose from "mongoose";
import { routeConstants } from './config/route.constants';
import linkRoutes from "./routes/link.routes";
import urlRoutes from "./routes/url.routes";
require('dotenv').config()

mongoose
    .connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, { useNewUrlParser: true })
    .then(() => {
        const app = express()
        app.use(express.json())
        app.use(express.urlencoded({
            extended: true
        }));
        app.use(routeConstants.API, linkRoutes);
        app.use(routeConstants.URL, urlRoutes)
        app.listen(process.env.SERVER_PORT, () => {
            console.log("Server has started! at Port",process.env.SERVER_PORT)
        })
    })

