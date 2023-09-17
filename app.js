const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/products');
const server = express();

server.use(express.urlencoded({extended:true}));
server.use(express.json());

mongoose.connect(
    'mongodb+srv://nouressmatt:ABCDEFG123@cluster0.vtkxk0d.mongodb.net/ecom'
).then(()=>{
    console.log("Connected to database");
}).catch((err)=>{
    console.log("Couldn't connect to databse");
})

server.get('/home',(req,res)=>{
    res.send('<b>welcome to our APIs</b>')
})

server.get('/products',(req,res)=>{
    Product.find().then((productData) => {
        res.send(productData);
    }).catch((err)=>{
        res.send("Could'nt get all products");
    })
})

server.get('/product/:id',(req,res)=>{
    let prodId = +req.params.id;
    Product.findOne({id:prodId}).then((product)=>{
        res.send(product);
    }).catch((err)=>{
        console.log(err);
    })
})

server.get('/',(req,res)=>{
    res.redirect('/home');
})

server.use((req,res,next) =>{
    res.status(404).send("404 <br /> Page Not Found");
});

server.listen(4000,()=>{
    console.log("connected to server");
})
