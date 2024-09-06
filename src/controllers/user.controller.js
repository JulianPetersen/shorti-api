
import User from '../models/User'

const nodemailer = require ('nodemailer')

export const createUser = (req,res) => {
    res.json('creating user')
}

export const getUserById = async (req,res) => {
    const user = await User.findById(req.params.userId)
    res.status(200).json(user);
}

export const getUsers = async (req,res) => {
    const user = await User.find()
    res.status(200).json(user)
}



export const changePassword = async (req,res) => {
    const userFound = await User.findOne({_id:req.body.id})
    const matchPassword = await User.comparePassword(req.body.password, userFound.password)
    if(matchPassword == false){
        return res.status(401).json({message:'Password ingresado invalido'})
    }
    let encryptPass = await User.encryptPassword(req.body.newPassword) 
    await User.updateOne({email:userFound.email}, {password:encryptPass})
    res.status(200).json({message:'Password cambiada correctamente'})
}

const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
}




 