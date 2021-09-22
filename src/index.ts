import express, { Request, Response,RequestHandler }  from "express"; 
import mongoose from "mongoose";
import cors  from "cors"; 
import api from './api/Routes'

const app = express();
app.use(cors({origin: "*"}));

mongoose.connect('mongodb://127.0.0.1:27017/wilders')
    .then(() => console.log("Connected to Mongo database 🌿"))
    .catch((err : Error) => console.log(err));

// Send CORS Headers, useful if API is requested from a browser

// Parse request body to json
app.use(express.json());

app.use("/api/v1", api)


app.listen(3000, () => console.log('Server running on port 3000! 🤌🏻'));