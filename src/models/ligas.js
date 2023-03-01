import {Schema,model} from 'mongoose'
import appConfig from '../config';

const ligaSchema = new Schema({
    name:String,
    imgUrl:String,
    equipos:[{
        type: Schema.Types.ObjectId,
        ref: "Equipo",
    }]
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