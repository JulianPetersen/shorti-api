import {Schema,model} from 'mongoose'
import appConfig from '../config';

const ligaSchema = new Schema({
    name:String,
    imgUrl:String,
},
{
    timestamps:true,
    versionKey:false
})

ligaSchema.methods.setImgUrl = function setImgUrl (filename){
    const {host, port} = appConfig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

export default model('Liga', ligaSchema)