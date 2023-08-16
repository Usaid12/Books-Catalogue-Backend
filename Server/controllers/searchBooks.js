const express=require("express")
const router=express.Router()
const dbConnect=require("../mongoDb")

const searchBooks=async(req,res)=>{
    const query = req.query.query.toLowerCase();
    console.log(query)
    try {
        let data=await dbConnect();
        data=await data.find().toArray();
        console.log(data)
        const results = data.filter(book =>
            book.books.author.toLowerCase().includes(query) ||
            book.books.title.toLowerCase().includes(query) ||
            book.books.genre.toLowerCase().includes(query)
        );
  
        res.status(200).json( {books: results });
        console.log(results)
    } catch (error) {
        console.log(error)
        res.status(404).json({message:"Book doesnot exist"})
        
    }   
}
module.exports=searchBooks