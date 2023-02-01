import Ligas from '../models/ligas'

export const createLigas = async (req, res) => {
    try {
        console.log(req.body)
        const { name, imgUrl } = req.body
        const newLiga = new Ligas({ name, imgUrl })
        if (req.file) {
            const { filename } = req.file;
            newLiga.setImgUrl(filename)
        }
        const ligaSaved = await newLiga.save();
        res.status(201).json(ligaSaved);
    } catch (error) {
        res.status(401).json(error)
    }
}

export const getLigas = async (req, res) => {
    const ligas = await Ligas.find()
    .populate({path:'equipos', model:'Equipo'})
    res.json(ligas);
}

export const getLigasById = async (req,res) => {
    const liga = await Ligas.findById(req.params.ligaId)
    .populate({path:'equipos', model:'Equipo'})
    res.status(200).json(liga);
}

export const updateLiga = async (req,res) => {
    const updatedLiga =  await Ligas.findByIdAndUpdate(req.params.ligaId, req.body,{
        new:true
    })
    res.status(204).json(updatedLiga);
}

export const deleteLiga = async (req,res) => {
    const deleteLiga =  await Ligas.findByIdAndDelete(req.params.ligaId)
    res.status(204).json()
}