import Pronostico from '../models/Pronosticos'
import Partido from '../models/partidos'

export const createPronostico = async (req, res) => {
    try {
        const { partido,usuario,prediccion } = req.body
        const newPronostico = new Pronostico({ partido,usuario,prediccion  })
        const partidoFound = await Partido.findById(partido)
        partidoFound.usuarios.push(usuario)
        await partidoFound.save()
        const pronosticoSaved = await newPronostico.save();
        res.status(201).json(pronosticoSaved);
    } catch (error) {
        res.status(401).json(error)
    }
}

export const getPronosticos = async (req, res) => {
    const predicciones = await Pronostico.find()
    .populate('partido')
    .populate('usuario')
    res.json(predicciones);
}

export const getPronosticoById = async (req,res) => {
    const pronostico = await Pronostico.findById(req.params.pronosticoId)
    .populate('partido')
    .populate('usuario')
    res.status(200).json(pronostico);
}

export const updatePronostico = async (req,res) => {
    console.log(req.body.puntosObtenidos)
    const updatedPronostico =  await Pronostico.findByIdAndUpdate(req.params.pronosticoId, req.body,{
        new:true
    })
    res.status(204).json(updatedPronostico);  
}

// export const deletePartido = async (req,res) => {
//     const deletedPartido =  await Partido.findByIdAndDelete(req.params.partidoId)
//     res.status(204).json()  
// }

export const getPronosticoByUser = async (req, res) => {
    const pronosticos = await Pronostico.find({usuario: req.params.userId})
    .populate('partido')
    .populate({
        path: 'partido',
        populate:{path:'equipo1'}
    })
    .populate({
        path: 'partido',
        populate:{path:'equipo2'}
    })
    .populate('usuario') 
    res.json(pronosticos); 
}