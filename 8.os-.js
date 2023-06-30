//Modules
//Build in module
const os = require("os");
const user = os.userInfo();
console.log(user);
//Method update the system
//os with the method name 

console.log(`The system update is ${os.uptime()}`);
//More method toward the os
//nodeorg ==> os methods
const currentOS = {
    name : os.type(),
    release :os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),

};
console.log(currentOS);

