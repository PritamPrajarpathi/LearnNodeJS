
// const path = require('path');
// const os = require('os');
// const fs = require('fs');
// const EventEmitter = require('events');
const http = require('http');

// var pathObj = path.parse(__filename);
// console.log(pathObj)

// var totalMemory = os.totalmem();
// var freeMemory  = os.freemem();

// console.log('Total Memory : ' + totalMemory);
// console.log(`Free Memory : ${freeMemory}`)

// const files = fs.readdirSync('./')
// console.log(files)
// fs.readdir('.$',function(err,files){
//     if(err) console.log("Error", err);
//     else console.log('Result', files);
// });

// const emitter = new EventEmitter();

// const Logger = require('./remotelogin');
// const logger =new Logger();
// //First Register a listener
// logger.on('messageLogged',(arg) => {
//     console.log('Listener called',arg);
// });

// logger.log('message');


//Finally Raise an event
// 
// emitter.on('loggin', arg => {
//     console.log('You are loggin', arg)
// });

// emitter.emit('loggin',{username:'hanmin'});

const server = http.createServer((req,res )=>{
    if (req.url === '/'){
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/cources'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.on('connection', (socket) => {
    console.log('New connection...');
});
server.listen(3000);

console.log('Listening on port 3000...');

