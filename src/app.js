import express from 'express'
import morgan from 'morgan';
// const mongoose = require('mongoose');
import mongoose from 'mongoose'
import {createRoles} from './libs/initialSetup'
//routes
import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import equiposRoutes from './routes/equipos.routes'

const app = express();
createRoles();
mongoose.set('strictQuery', true);

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req,res)=> {
    res.json({
        author:'Frigg',
        description:"API made by frigg, for shorti App.",
        version:"1.0.0"
    })
})


app.use('/api/products',productsRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);
app.use('/api/equipos', equiposRoutes)


export default app