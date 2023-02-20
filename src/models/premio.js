import {Schema,model} from 'mongoose'


const premioSchema = new Schema({
    cantidad:Number,
    fecha:String,
    participantes:[{
        type: Schema.Types.ObjectId,
        ref: "User",
        default:[]
    }],
    cantParticipaciones:{
        type:Number,
        default:0
    },
    ganador:{
        type: Schema.Types.ObjectId,
        ref: "User",
        default:null
    }
},
{
    timestamps:true,
    versionKey:false
})

export default model('Premio', premioSchema)