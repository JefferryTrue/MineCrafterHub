
const express = require("express");

const application = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const cors = require('cors');
const multer = require("multer");

application.use(cors());

//let objMulter = multer({dest:"./public/upload"});

//application.use(objMulter.any());

application.use(express.static('./public'));
// application.use(express.static("./public/previewImg"));

const dbUrl = require("./config/keys").MongoURL;


const uploadimg = require('./routes/uploadimg');
const blogs = require("./routes/blogs");


// 使用body-parser中间键
application.use(bodyParser.urlencoded({extended:false}));
application.use(bodyParser.json());

mongoose.connect(dbUrl)
        .then(() => console.log("Mongodb connected!"))
        .catch(err => console.log(err));

application.get("/",(req,res) => {
    res.send("hello world!");
})

application.use("/api/blogs",blogs);
application.use("/api/img",uploadimg);

application.listen(3000,()=>{
    console.log("server running on port 3000");
})
