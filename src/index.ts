import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app)

const port = 3030;

server.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});

const MONGO_URL = 'mongodb+srv://vnoisy:SvSrABkJ42Jafy2K@cluster0.wezvwzk.mongodb.net/';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error',(error: Error) => console.log(error));

app.use('/', router());

