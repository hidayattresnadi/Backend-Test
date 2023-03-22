const express = require('express')
const UserController = require('../controller/usercontroller')
const sharp =require('sharp')
const router = express.Router()

const multer = require('multer')
const { storage } = require('../cloudinary/index')
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'assets')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.originalname)
//     }
//   })
// const storage = multer.memoryStorage()
const upload = multer({ storage })
  


// router.post('/register',upload.array('foto'),UserController.register)
router.post('/register',upload.array('photo'),UserController.register)
router.get('/:id',upload.none(),UserController.getUser)
router.put('/:id',upload.array('photo'),UserController.editUser)


module.exports=router