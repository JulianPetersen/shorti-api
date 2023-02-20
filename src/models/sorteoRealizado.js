import {Schema,model} from 'mongoose'


const sorteoRealizadoSchema = new Schema({
    cantidad:Number,
    fecha:String,
    cantParticipaciones:Number,
    ganador:{
        type: Schema.Types.ObjectId,
        ref: "User",
    }
},
{
    timestamps:true,
    versionKey:false
})

export default model('SorteoRealizado', sorteoRealizadoSchema)