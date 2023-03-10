import { config } from 'dotenv'
import User from '../models/User'
import {transporter} from '../config';

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

export const updatePassword = async (req,res) => {
    
    const userFind = await User.findOne({email:req.body.email})
    console.log(userFind)
    let newPass = generateRandomString(10).trim()
    console.log(newPass.trim())
    let encryptPass = await User.encryptPassword(newPass)
    console.log(encryptPass)
    await User.updateOne({email:req.body.email}, {password:encryptPass})
    await transporter.sendMail({
        from: 'Recupera tu constraseña <contacto@friggdd.site>',
        to: userFind.email,
        subject: 'Recupera tu constraseña Shorti',
        html: `<b> Tu Nueva contraseña es: ${newPass} Logueate y cambiala desde la seccion de mi perfil dentro de la app.</b>`
    })
    res.status(200).json({success: userFind.email})
     
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




 