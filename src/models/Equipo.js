import { Schema, model } from "mongoose";
import appConfig from '../config';


const equipoSchema = new Schema({
    nombreEquipo:{
        type:String,
        unique:true,
    },
    imgUrl:{
        type:String,
    },
    puntosTorneo:{
        type:Number,
    },
    cantVictorias:{
        type:Number,
    },
    cantDerrotas:{
        type:Number,
    },
    ligaId:{
        ref: "Liga",
        type: Schema.Types.ObjectId,
        require:true
    },
},
{
    timestamps:true,
    versionKey:false
})

equipoSchema.methods.setImgUrl = function setImgUrl (filename){
    const {host, port} = appConfig
    this.imgUrl = `${host}/public/${filename}`
}

export default model('Equipo', equipoSchema) 