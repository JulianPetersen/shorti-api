import { Schema, model } from "mongoose";



const partidoSchema = new Schema({
    equipoLocal:{
        ref: "Equipo",
        type: Schema.Types.ObjectId,
        require:true
    },
    equipoVisitante:{
        ref: "Equipo",
        type: Schema.Types.ObjectId,
        require:true
    },
    ganador:{
        ref: "Equipo",
        type: Schema.Types.ObjectId,
        default:null
    },
    perdedor:{
        ref: "Equipo",
        type: Schema.Types.ObjectId,
        default:null
    },
    empate:{
        type:Boolean,
        default:false
    },
    fechaPartido:{
        type:String,
        require:true
    },
    HoraPartido:{
        type:String,
        require:true
    },
    fechaId:{
        ref: "Fecha",
        type: Schema.Types.ObjectId,
        default:null
    },
},
{
    timestamps:true,
    versionKey:false
})


export default model('Partido', partidoSchema) 