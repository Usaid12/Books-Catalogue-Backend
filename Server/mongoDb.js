const {MongoClient}=require("mongodb")
const url="mongodb://localhost:27017";
const databaseName="BooksCatalogue"
const client=new MongoClient(url);
const connection=async()=>{
    let result=await client.connect();
    db=result.db(databaseName);
    return db.collection("Books")
}
module.exports=connection