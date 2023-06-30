//Http methods 
const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.end('welcome to our home page');
    }
   else if(req.url === '/about'){
    res.end('Here is our short histroy')
    }
    
    res.end(`
    <h1>oops</h1>
    <p>We cannot use that </p>
    `);
    
})
server.listen(7000); 
