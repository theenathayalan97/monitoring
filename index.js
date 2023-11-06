const express = require("express")
const app = express()
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


// const http = require('http');
console.log('Server starting...');
app.get('/',(req, res) => {
    console.log('Request received...');
    res.end('Hello GCP dev! in theena complete task-1');
}).listen(80, () => {
    console.log('started.');
});
