const  express = require("express") 
const bodyParser = require('body-parser')
const cors = require("cors")
const server = express();


server.use(cors())
server.use(bodyParser.json())

// server.get("/demo" , (req,res)=>{
//     res.send("hello")
// })


server.post("/demo" , (req,res)=>{
    res.json(req.body)
    console.log(req.body, "resbody");
})


server.listen(8080, ()=>{
    console.log("server started ");
})