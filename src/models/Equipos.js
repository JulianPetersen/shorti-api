import {Schema,model} from 'mongoose'
import appConfig from '../config';

const equipoSchema = new Schema({
    name:String,
    liga:String,
    imgUrl:String,
},
{
    timestamps:true,
    versionKey:false
})

equipoSchema.methods.setImgUrl = function setImgUrl (filename){
    const {host, port} = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}



export default model('Equipo', equipoSchema)