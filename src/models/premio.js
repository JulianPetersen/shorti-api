import {Schema,model} from 'mongoose'


const premioSchema = new Schema({
    cantidad:Number,
    fecha:String
},
{
    timestamps:true,
    versionKey:false
})

export default model('Premio', premioSchema)