const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");

app.use(express.json());
app.use(cors());

//Database connection to MongoDB
mongoose.connect("mongodb+srv://sam:Samrah06!@cluster0.8kh1kxt.mongodb.net/adidas")

// API creation

app.get("/", (req, res)=>{
    res.send("Express App is Running");
})

//Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage: storage})

//Create Upload endpoint

app.use('/images', express.static('upload/images'))

app.post('/upload', upload.single('product'), (req,res) =>{
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

// Schema for Creating Products 

const Product = mongoose.model("Product", {
    id:{
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    image_offline: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    },
    tab: {
        type : [String],
        required: true,
    }, 
    category: {
        type: [String],
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
       type: Boolean,
       default: true, 
    },
})

//Add product end point
app.post('/addproduct', async (req, res) => {
    let products =  await Product.find({});
    let id ;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image,
        image_offline: req.body.image_offline,
        tag: req.body.tag,
        tab: req.body.tab,
        category: req.body.category,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    })
})

// Creating API for Deleting Products
app.post('/removeproduct', async (req, res) =>{
    await Product.findOneAndDelete({
        id: req.body.id
    })
    console.log("Removed");
    res.json({
        success: true,
        name: req.body.name
    })
})

// Creating API to get all products
app.get('/allproducts', async (req,res) => {
    let products = await Product.find({});
    console.log("all products fetched");
    res.send(products);
})

// Error Handling 

app.listen(port ,(error) => {
    if(!error){
        console.log("Server running on port: " + port);}
    else{
        console.log("Error: " + error);
    }

})