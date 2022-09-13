
const express = require('express');     // Set express as Node.js web application
const cors = require('cors');     
const app = express();
require('./DB/config');                 //db connected
const usersData = require('./DB/user');     
const productsData = require('./DB/product');     

app.use(express.json());
app.use(cors());

app.get('/home', (req,resp)=>{
    resp.send("guys this will send data to /home page,if req by user");
});      

app.post('/register', async (req,resp)=>{
    let user = new usersData(req.body);
    let data = await user.save();       //this ll save data(dt ll come through req), to our database in expected collection which we hv mentioned in schema file
    
              data = data.toObject();
              delete data.password ;    //we dont need to send password in response

    console.log(data);
    resp.send(data);
});      

// app.delete('/delete/:_id',async (req,resp)=>{
//     console.log(req.params)
//     let data = await usersData.deleteOne(req.params);
//     resp.send(data);
// });      
// app.put('/update/:_id',async (req,resp)=>{
//     console.log(req.params)
//     let data = await usersData.updateOne(req.params, {$set:req.body});
//     resp.send(data);
// });    

app.post('/login', async (req,resp)=>{
    console.log(req.body);

    if(req.body.password && req.body.email){    
        // let data = await userData.findOne(req.body);    --> this will give whole data(dont need to send pssword in resp)
        let data = await usersData.findOne(req.body).select("-password"); 
        if(data){resp.send(data)}  
        else{ resp.send({result:"no user found"}) }
    }
    else{ 
        resp.send({result:"no user found"}) 
    }
});      

app.post('/add-product', async (req,resp)=>{
    let product = new productsData(req.body);
    let data = await product.save();       //this ll save data(dt ll come through req), to our database in expected collection which we hv mentioned in schema file

    console.log(data);
    resp.send(data);
});      
app.get('/productlist',async (req,resp)=>{
    let products = await productsData.find();
    if(products.length>0){
        resp.send(products);
    }else{
        resp.send({result:"no result found"});
    }
});      

app.listen(4000); 
