//Http methods 
// const http = require('http')

// const server = http.createServer((req,res)=>{
//     //call back function
//     if(req.url === '/'){
//         res.end('Welcome to our home page');
//     }
//     if(req.url === '/about'){
//         res.end('Here is about page');
//     }
//     res.end(`<h1>Oops!</h1>
//         <p>We can't find the page'</p>
//         <a href = "/">back home</a>
//         `)
// })
// server.listen(5000); 

const _ = require('lodash');
const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

