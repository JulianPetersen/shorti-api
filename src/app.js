import express from 'express'
import morgan from 'morgan';
// const mongoose = require('mongoose');
import mongoose from 'mongoose'
import {createRoles} from './libs/initialSetup'
import cors from 'cors';


//routes
import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'
import equiposRoutes from './routes/equipos.routes'
import ligasRoutes from './routes/ligas.routes'
import partidosRoutes from './routes/partidos.routes'
import pronosticosRoutes from './routes/pronosticos.routes'
import infoUserRoutes from './routes/infousuario.routes'
import premioRoutes from './routes/premio.routes'
import sorteoRealizadoRoutes from './routes/sorteoRealizado.routes'
import retirosRoutes from './routes/retiros.routes'

const app = express();
createRoles();
mongoose.set('strictQuery', true);

app.use(express.json());
app.use(morgan('dev'));
app.use(cors())

//statics files
app.use('/public', express.static(`${__dirname}/storage/imgs`))
console.log(`${__dirname}/storage/imgs`)

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
app.use('/api/ligas', ligasRoutes)
app.use('/api/partidos', partidosRoutes)
app.use('/api/pronosticos', pronosticosRoutes)
app.use('/api/infouser', infoUserRoutes)
app.use('/api/premio', premioRoutes)
app.use('/api/sorteoRealizado', sorteoRealizadoRoutes)
app.use('/api/retiros', retirosRoutes)

export default app  