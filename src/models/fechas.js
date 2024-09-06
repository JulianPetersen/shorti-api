import { Schema, model } from "mongoose";

const fechasSchema = new Schema({

    fechaNumero:{
        type:String,
        require:true
    },
    diaComienza:{
        type:String,
        require:true
    },
    diaTermina:{
        type:String,
        require:true
    },
    ligaId:{
        ref: "Liga",
        type: Schema.Types.ObjectId,
        require:true
    }

},
{
    timestamps:true,
    versionKey:false
})


export default model('Fecha', fechasSchema) 