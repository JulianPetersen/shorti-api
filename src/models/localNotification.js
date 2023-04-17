import {Schema,model} from 'mongoose'

const localNotification = new Schema({
    date: String,
    title:String,
    messagge:String,
    user:[{
        ref: "User",
        type: Schema.Types.ObjectId
    }]
},
{
    timestamps:true,
    versionKey:false
})

export default model('LocalNotification', localNotification)