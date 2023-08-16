const express=require("express")
const router=express.Router
const dbConnect=require("../mongoDb")

const getBooks=async(req,res)=>{
    try {
        let data=await dbConnect();
    data=await data.find().toArray();
    console.log(data)
    res.status(200).json({data:data,message:"Success"})
        
    } catch (error) {
        res.status(404).json({message:"An error occured.."})
    }
    

}
module.exports=getBooks