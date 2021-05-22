const {readFile, writeFile} = require('fs')    //const fs = requirer('fs')     fs.readFileSync


console.log('start');
readFile('./content/first.txt', 'utf-8', (er ,result)=>{
    if(er){
        console.log(er)
        return
    }
    const first = result;
    
    readFile('./content/second.txt','utf8',(eror,result)=>{
        if(eror){
            console.log(eror);
            return
        }
        const second = result;

        writeFile('./content/result-async.txt',`\nHere is the async result : ${first} , ${second} `,{flag:'a'},
                    (err, result)=>{
                        if(err){
                            console.log(err);
                            return
                        }
                        console.log('done with this task');
                    }
        )
    })

})
console.log('starting next task')

