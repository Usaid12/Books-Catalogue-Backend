const express=require("express")
const router=express.Router()
const searchBooks=require("../controllers/searchBooks")


router.get('/',searchBooks)
module.exports=router
