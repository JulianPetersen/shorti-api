import {Schema,model} from 'mongoose'

const retirosShema = new Schema({
    usuario:{
        ref: "User",
        type: Schema.Types.ObjectId
    },
    nombre:String,
    apellido:String,
    cbu:String,
    alias:String,
    monto:Number,
    fecha:String,
    estado:{
        type:String,
        default:'Pendiente'
    }
},
{
    timestamps:true,
    versionKey:false
})

export default model('Retrios', retirosShema)