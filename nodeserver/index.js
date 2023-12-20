//pahla step !
import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import userRoutes from './router/users.js'


const app =express();
const port = 5000;
app.use(bodyParser.json())
app.use(cors())



app.use("/", userRoutes)
app.all("*" ,(req,res)=>res.send("thats api doesnt exist"))// if someone choose different port it will show error !


app.get("/" , (req,res)=>res.send("hello express"))


app.listen(port , ()=> console.log(`serverislistening at port: ${port}`));