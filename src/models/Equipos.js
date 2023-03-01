import {Schema,model} from 'mongoose'
import appConfig from '../config';

const equipoSchema = new Schema({
    name:String,
    liga:{
        ref: "Liga",
        type: Schema.Types.ObjectId
    },
    imgUrl:String,
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