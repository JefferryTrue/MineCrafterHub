

fs = require("fs")

exports.uploadimg = (req,res) => {
    let oldName = req.file.filename;

    let newName = req.file.originalname;

    // let oldName = req.files[0].filename;

    // let newName = req.files[0].originalname;

    fs.renameSync('./public/upload/'+oldName,'./public/upload/'+newName);

    res.send({
        err:0,
        url:"http://127.0.0.1:3000/upload/"+newName,
        name:newName
    });
}

exports.previewImg = (req,res) => {
    // let oldName = req.files[0].filename;

    // let newName = req.files[0].originalname;
    let oldName = req.file.filename;

    let newName = req.file.originalname;

    fs.renameSync('./public/previewImg/'+oldName,'./public/previewImg/'+newName);

    res.send({
        err:0,
        url:"http://127.0.0.1:3000/previewImg/"+newName,
        name:newName
    });
}

exports.delimg = (req,res) => {

    const name = req.body.url;
    console.log(name);
    
    fs.unlink('./public/upload/'+name,(err)=>{
        if(err){
            throw err;
        }
        console.log("Deleted Successfully!");
    })
}

