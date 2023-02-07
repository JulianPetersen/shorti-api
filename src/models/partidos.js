import {Schema,model} from 'mongoose'

const partidoSchema = new Schema({
    fecha: String,
    horario:String,
    equipo1:{
        ref: "Equipo",
        type: Schema.Types.ObjectId
    },
    equipo2:{
        ref: "Equipo",
        type: Schema.Types.ObjectId
    },
    resultado: Object,
    estado:String,
    usuarios:[{
        ref: "User",
        type: Schema.Types.ObjectId
    }]
},
{
    timestamps:true,
    versionKey:false
})

export default model('Partido', partidoSchema)