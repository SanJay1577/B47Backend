import express from "express";
import cors from "cors"
import {studentRouter} from "./Routes/students.js"



//initializing express server
const app = express();

const PORT = 8080;

//middlewares
app.use(express.json());
app.use(cors())

// application routes 
app.use("/students", studentRouter)

//start the server
app.listen(PORT, () => console.log(`Server started in localhost:${PORT}`));
