import express from 'express';
import mongoose from "mongoose";
import { routeConstants } from './config/route.constants';
import linkRoutes from "./routes/link.routes";
import urlRoutes from "./routes/url.routes";
import { getMongoDbUrl } from './utils/URLUtils';
require('dotenv').config()


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
