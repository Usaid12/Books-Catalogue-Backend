const express=require("express")
const router=express.Router()
const getBooks=require("../controllers/getBooks")


router.get('/',getBooks)
module.exports=router
