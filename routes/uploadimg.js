
const express = require('express');
const multer = require("multer");
const path = require('path')
const router = express.Router();

const handle = require('../router_handler/operateImg');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/publoc/upload')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname)
//     }
//   })
  
//   const upload = multer({ storage: storage })


router.post('/uploadimg',multer({dest:'./public/upload'}).single('image'),handle.uploadimg);

router.post('/previewImg',multer({dest:'./public/previewImg'}).single('image'),handle.previewImg);

router.post('/delimg',multer({dest:'./public/upload'}).single('url'),handle.delimg);

module.exports = router;
