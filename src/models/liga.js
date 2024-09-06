import { Schema, model } from "mongoose";
import appConfig from '../config';


const ligaSchema = new Schema({
    nombreLiga:{
        type:String,
        unique:true,
    },
    imgUrl:{
        type:String,
        
    },
    campeonLiga:{
        type:String,
    },
},
{
    timestamps:true,
    versionKey:false
})

ligaSchema.methods.setImgUrl = function setImgUrl (filename){
    const {host, port} = appConfig
    this.imgUrl = `${host}/public/${filename}`
}

export default model('Liga', ligaSchema) 