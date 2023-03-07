const jwt= require("jsonwebtoken")

const authentication=(req,res,next)=>{
    const token=req.headers.authorization;

    if(token){
        const decoded=jwt.verify(token,"chandaguli")
        if(decoded){
            next()
        }
        else{
            req.send("You are not authorised")
        }
    }
    else{
        res.send("Please login")
    }
}
module.exports={authentication}