const express=require("express")
const apiRouter=express.Router()
const getBookRouter=require("./books.router")
const searchBookRouter=require("./seach.router")


apiRouter.use("/",getBookRouter)
apiRouter.use("/search",searchBookRouter)
module.exports=apiRouter