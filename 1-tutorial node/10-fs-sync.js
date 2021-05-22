// const fs = requirer('fs')
const {readFileSync, writeFileSync} = require('fs')    //const fs = requirer('fs')     fs.readFileSync

console.log('start')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

writeFileSync('./content/result-sync.txt', `\nHere is the result : ${first} , ${second}`,
{flag:'a'}) // append == 'a'

console.log('done with this task');
console.log('starting the next one');