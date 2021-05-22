const express = require('express')
const app = express()
const {products}= require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products"> Products </a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id, name, image} = product  
        return {id, name, image}
    })
    res.json(newProducts)
})

app.get('/api/products/:ID',(req,res)=>{
    console.log(req.params);
    // console.log(req.params);
    const {ID} = req.params;
    const singleProduct = products.find((product)=>product.id === Number(ID))
    if(!singleProduct){
        return res.status(404).send("Product does not exit")
    }
    res.json(singleProduct)
})
app.get('/api/products/:ID/reviews/:reviewID',(req,res)=>{
    console.log(req.params); //{ ID: '1', reviewID: 'adf' }
    res.send('hello world')
})

app.get('/api/v1/qurey',(req,res)=>{
    console.log(req.query); //http://kafad.com/?search=sdf&limit=5
    const {search, limit } = req.query
    let sortedProducts =[...products]
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length<1){
        // res.status(200).send('No product match')
        return res.status(200).json({success:true,data:[ ]})
    }
    res.status(200).json(sortedProducts)
})

app.listen(5000,()=>{
    console.log('you have done  well bro good job');
})
