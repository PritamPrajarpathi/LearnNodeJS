const {readFile} = require('fs');

const getText = (path) => {
  return new Promise((resolve,rejects)=>{
    readFile(path,'utf8',(err,result)=>{
      if(err){
        rejects(err)
      }else{
        resolve(result);
      }
    })    
  }
  )
}
getText('../content/first.txt').then(resul => console.log(resul)).catch(err=> console.log(err))