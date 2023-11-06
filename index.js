// const express = require("express")
// const app = express()
// const port = 8001

// app.use(express.json())


// app.get("/",(req,res)=>{
//     console.log(123456)
//     res.send("Hello World")
// })

// //changes accept

// app.listen(port,(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(`Server is running on port ${port}`)
//     }
// })


const http = require('http');
console.log('Server starting...');
http.createServer((req, res) => {
    console.log('Request received...');
    res.end('Hello GCP dev! in theena');
}).listen(80, () => {
    console.log('started.');
});
