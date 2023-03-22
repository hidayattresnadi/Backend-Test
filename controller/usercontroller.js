const sharp = require("sharp");
const { cloudinary } = require("../cloudinary/index")
const fs = require('fs')
const { User } = require("../models/index")
const { storage } = require('../cloudinary/index')
class UserController {
    static async register(req, res, next) {
        try {
            console.log(';;')
            const {
                name,
                usia,
                mobile,
                city,
                education
            } = req.body;
            // fs.access("./assets",(err)=>{
            //     if(err){
            //         fs.mkdirSync('./assets')
            //     }
            // })
            // const first= await sharp(req.files[0].path).resize({width:500,height:500,fit:"contain"}).toFile('./assets-500px/'+req.files[0].originalname)
            // const second = await sharp(req.files[0].buffer).resize({width:1000,height:1000,fit:"contain"}).toFile('./assets-1000px/'+req.files[0].originalname)  
            // const foto = [first]
            const newFoto = await cloudinary.uploader.upload(req.files[0].path, {
                folder: "assets",
                width: 1000,
                height: 1000,
                crop: 'fill'
            })
            const secondPhoto = await cloudinary.uploader.upload(req.files[0].path, {
                folder: "assets",
                width: 500,
                height: 500,
                crop: 'fill'
            })
            const user = await User.create({
                name,
                age:usia,
                mobile,
                city,
                education,
                image: [newFoto.url, secondPhoto.url]
            })
            res.status(201).json(user)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
    static async getUser(req, res, next) {
        try {
            const {id}=req.params
            const user = await User.findOne({
                where: {
                    id: id
                }
            })
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }
    static async editUser(req, res, next) {
        try {
            const {id}=req.params
            const {
                name,
                usia,
                mobile,
                city,
                education
            } = req.body;
            const newFoto = await cloudinary.uploader.upload(req.files[0].path, {
                folder: "assets",
                width: 1000,
                height: 1000,
                crop: 'fill'
            })
            const secondPhoto = await cloudinary.uploader.upload(req.files[0].path, {
                folder: "assets",
                width: 500,
                height: 500,
                crop: 'fill'
            })
            const user = await User.update({
                name,
                age:usia,
                mobile,
                city,
                education,
                image: [newFoto.url, secondPhoto.url]},{
                where: {
                    id: id
                }
            })
            res.status(200).json({message:"User has been updated"})
        } catch (error) {
            next(error)
        }
    }

}
module.exports = UserController