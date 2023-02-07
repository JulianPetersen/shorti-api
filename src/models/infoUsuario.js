import {Schema,model} from 'mongoose'

const infousuarioSchema = new Schema({
    usuario:{
        ref: "User",
        type: Schema.Types.ObjectId
    },
    puntosObtenidos: Number,
},
{
    timestamps:true,
    versionKey:false
})
 
export default model('Infousuario', infousuarioSchema)