import express from 'express';
import mongoose from "mongoose";
import { routeConstants } from './config/route.constants';
import linkRoutes from "./routes/link.routes";
import urlRoutes from "./routes/url.routes";

mongoose
    .connect("mongodb://localhost:27017/relinks", { useNewUrlParser: true })
    .then(() => {
        const app = express()
        app.use(express.json())
        app.use(express.urlencoded({
            extended: true
        }));
        app.use(routeConstants.API, linkRoutes);
        app.use(routeConstants.URL,urlRoutes)
        app.listen(5000, () => {
            console.log("Server has started!")
        })
    })

