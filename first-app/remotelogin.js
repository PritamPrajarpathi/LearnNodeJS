const EventEmitter = require('events');


class Logger extends EventEmitter {
    log(message){
        // Send an Http request
        console.log(message);
        this.emit('messageLogged', 
            { id: 1, url: 'http://'});
    }
    
}


module.exports = Logger;