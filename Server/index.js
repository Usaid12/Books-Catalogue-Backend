const express=require("express")
const app=express()
const BaseRouter=require("../server/routes")
const cors=require("cors")
const PORT=5000
app.use(cors())
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hi, Books Catalogue LIVEEEE");
// });

app.use("/",BaseRouter)
app.listen(PORT, () => {

    console.log(`App is listening on http://localhost:${PORT}`);
  });