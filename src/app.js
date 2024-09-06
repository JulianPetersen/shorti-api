require ('dotenv').config();
import express from 'express'
import morgan from 'morgan';
// const mongoose = require('mongoose');
import mongoose from 'mongoose'
import {createRoles} from './libs/initialSetup'
import cors from 'cors';



//routes

import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import teamRoutes from './routes/equipo.routes'
import partidoRoutes from './routes/partidos.routes'
import ligaRoutes from './routes/ligas.routes'
import fechasRoutes from './routes/fechas.routes'

const app = express();
var path = require('path')
createRoles();
mongoose.set('strictQuery', true);

app.use(express.json());
app.use(morgan('dev'));
app.use(cors())

//statics files
// app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/public', express.static(path.join(__dirname, 'storage/imgs')))
// app.get('/', (req,res)=> {
//     res.json({
//         author:'Frigg',
//         description:"API made by frigg, for shorti App.",
//         version:"1.0.3"
//     })
// })

app.use(express.static(path.join(__dirname, 'client')));


app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);
app.use('/api/teams', teamRoutes)
app.use('/api/partidos', partidoRoutes)
app.use('/api/ligas', ligaRoutes)
app.use('/api/fechas',fechasRoutes)


export default app  