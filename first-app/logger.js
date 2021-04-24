// (function (exports, require, module, __filename, __dirname){
    console.log(__dirname);
    console.log(__filename);

    var url = "http://google.com";

 function log(message){
     // Send an Http request
     console.log(message);
 }

 
module.exports.log = log; // export object
// module.exports = log; // export single function

// module.exports.endPoint = url;
// console.log(module)
// })