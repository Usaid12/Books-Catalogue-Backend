const express=require("express")
const router=express.Router()
const dbConnect=require("../mongoDb");

// const searchBooks=async(req,res)=>{
//     const query = req.query.query.toLowerCase();
//     // console.log(query)
//     try {
//         let data=await dbConnect();
//         data=await data.find().toArray();
//         // console.log(data)
//         const results = data.filter(book =>
//             book.books.author.toLowerCase().includes(query) ||
//             book.books.title.toLowerCase().includes(query) 
//             // book.books.genre.toLowerCase().includes(query)
//         );
  
//         res.status(200).json( {books: results });
//         console.log(results)
//     } catch (error) {
//         console.log(error)
//         res.status(404).json({message:"Book does not exist"})
        
//     }   
// }

const searchBooks = async (req, res) => {
    const {title, author, genre} = req.query;
    const queryObject = {};

    let data=await dbConnect();
    data=await data.find().toArray();

    if (title) {
        const sanitizedTitle = encodeURIComponent(title);
        queryObject['books.title'] = { $regex: sanitizedTitle, $options: 'i' };
    }

    if (author) {
        const sanitizedAuthor = encodeURIComponent(author);
        queryObject['books.author'] = { $regex: sanitizedAuthor, $options: 'i' };
    }

    if (genre) {
        const sanitizedGenre = encodeURIComponent(genre);
        queryObject['books.genre'] = { $in: [sanitizedGenre] };
    }


    try {
        const filteredData = data.filter(book =>
            (!title || book.books.title.toLowerCase().includes(title.toLowerCase())) &&
            (!author || book.books.author.toLowerCase().includes(author.toLowerCase())) &&
            (!genre || book.books.genre.map(g => g.toLowerCase()).includes(genre.toLowerCase()))
        );

        const MyData = await filteredData;
        res.status(200).json({MyData, nbHits : MyData.length});

    // let page = Number(req.query.page) || 1;
    // let limit = Number(req.query.limit) || 3;

    // let skip = (page-1) * limit;

    // apiData = apiData.skip(skip).limit(limit);

    }catch (error) {
        console.log(error);
    }
};

module.exports=searchBooks