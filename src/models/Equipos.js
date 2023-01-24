import {Schema,model} from 'mongoose'

const equipoSchema = new Schema({
    name:String,
    liga:String,
    imgUrl:String,
},
{
    timestamps:true,
    versionKey:false
})


export default model('Equipo', equipoSchema)