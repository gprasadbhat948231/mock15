const express=require("express")
const {userRoute}=require("./route/signin.route")
const {connection}=require("./config/db")
const cors=require("cors")
const {authentication}=require("./middlewares/signin.middleware")

const app=express();
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.use("/user",userRoute)
app.use(authentication);

app.listen(4500,async()=>{
    try{
        await connection;
        console.log("Connected to database")
    }catch(err){
        console.log("error while connecting to db")
    }
})