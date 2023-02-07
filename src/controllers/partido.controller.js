import Partido from '../models/partidos'

export const createPartido = async (req, res) => {
    try {
        const { fecha, horario, equipo1,equipo2,resultado, estado, usuario } = req.body
        const newPartido = new Partido({ fecha, horario, equipo1,equipo2,resultado, estado, usuario })
        const partidoSaved = await newPartido.save();
        res.status(201).json(partidoSaved);
    } catch (error) {
        res.status(401).json(error)
    }
}

export const getPartidos = async (req, res) => {
    const partidos = await Partido.find()
    .populate('equipo1')
    .populate('equipo2')
    res.json(partidos);
}

export const getPartidoById = async (req,res) => {
    const partido = await Partido.findById(req.params.partidoId)
    .populate('equipo1')
    .populate('equipo2')
    res.status(200).json(partido);
}

export const updatePartido = async (req,res) => {
    const updatedPartido =  await Partido.findByIdAndUpdate(req.params.partidoId, req.body,{
        new:true
    })
    res.status(204).json(updatedPartido);  
}

export const deletePartido = async (req,res) => {
    const deletedPartido =  await Partido.findByIdAndDelete(req.params.partidoId)
    res.status(204).json() 
}

export const getPartidosByUser = async (req, res) => {
    const partidos = await Partido.find({usuarios:{$ne: req.params.userId}})
    .populate('equipo1')
    .populate('equipo2') 
    res.json(partidos); 
}