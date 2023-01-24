import mongoose  from "mongoose";

mongoose.connect("mongodb://localhost/shortiDb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error))