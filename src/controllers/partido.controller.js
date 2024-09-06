import Partido from '../models/partidos'

export const createPartido = async (req, res) => {

    try {
        const { equipoLocal, equipoVisitante, ganador, perdedor, empate,fechaPartido,HoraPartido, fechaId } = req.body
        const newPartido = new Partido({ equipoLocal, equipoVisitante, ganador, perdedor, empate,fechaPartido,HoraPartido,fechaId })
        const partidoSaved = await newPartido.save();
        res.status(201).json(partidoSaved);
    } catch (error) {
        res.status(400).json(error)
    }
}


export const getPartidos = async (req,res) => {
    try {
        const partidos = await Partido.find()
        res.status(200).json(partidos)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getPartidosById = async (req,res) => {
    try {
        const partido = await Partido.findById(req.params.partidoId)
        res.status(200).json(partido)
    } catch (error) {
        res.status(400).json(error)
    }
}


export const updatePartido = async (req,res) => {
    const updatedPartido =  await Partido.findByIdAndUpdate(req.params.partidoId, req.body,{
        new:true
    })
    res.status(201).json({
        result:"ok",
        newTeam:updatedPartido
    });
}


export const deletePartido = async (req,res) => {
    try {
        const deletePartido = await Partido.findByIdAndDelete(req.params.partidoId)
        res.status(201).json({message:'OK'})
    } catch (error) {
        res.status(400).json({message:error})
    }
    
}