//Async file 
const {readFileSync,writeFileSync} = require('fs');
const first  = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first,second);
writeFileSync(
    './content/result-sync-file',`Here is the result of the ${first} ,${second}`,
    //append
    {flag :'a'}
)
