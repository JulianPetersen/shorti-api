import {Schema,model} from 'mongoose'

const pronosticoSchema = new Schema({
    partido:{
        ref:"Partido",
        type: Schema.Types.ObjectId
    },
    usuario:{
        ref: "User",
        type: Schema.Types.ObjectId
    },
    prediccion:Object,
    puntosObtenidos:{
        type: Number,
        default: null
    }
},
{
    timestamps:true,
    versionKey:false
})

export default model('Pronostico', pronosticoSchema)