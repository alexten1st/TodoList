require("dotenv").config();

const express = require("express");
const connectDB = require("./db/db")
const authRouter = require("./routers/authRouter/authRouter") 
const todosRouter = require("./routers/todoRouter/todoRouter") 
const cors = require("cors")

const PORT = process.env.PORT || 3001;
const app = express()

app.use(cors())
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/auth", authRouter)
app.use("/", todosRouter)

connectDB();
app.listen(PORT, ()=>{
    console.log(`app start on port - ${PORT}`)
})