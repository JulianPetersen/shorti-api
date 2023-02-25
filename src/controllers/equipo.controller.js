import Equipo from '../models/Equipos'
import Liga from '../models/ligas'

export const createEquipo = async (req, res) => {
    try {
        console.log(req.body)
        const { name, liga, imgUrl } = req.body
        const newEquipo = new Equipo({ name, liga, imgUrl })
        // if (req.file) {
        //     const { filename } = req.file;
        //     newEquipo.setImgUrl(filename)
        // }
        let ligaFound = await Liga.findById(liga)
        ligaFound.equipos.push(newEquipo._id)
        await ligaFound.save()
        const equipoSaved = await newEquipo.save();
        res.status(201).json(equipoSaved);
    } catch (error) {
        res.status(401).json(error)
    }
}

export const getEquipos = async (req, res) => { 
    const equipos = await Equipo.find()
    .populate("liga")
    res.json(equipos);
}

export const getEquiposByLigas = async (req,res) => {
    const equipos  = await Equipo.find({liga:req.params.ligaId})
    .populate('liga')
    res.json(equipos)
}

export const getEquipoById = async (req,res) => {
    const equipo = await Equipo.findById(req.params.equipoId)
    .populate("liga")
    res.status(200).json(equipo);
}

export const updateEquipo = async (req,res) => {
    const updatedEquipo =  await Equipo.findByIdAndUpdate(req.params.equipoId, req.body,{
        new:true
    })
    res.status(204).json(updatedEquipo);
}

export const deleteEquipo = async (req,res) => {
    const deletedEquipo =  await Equipo.findByIdAndDelete(req.params.equipoId)
    res.status(204).json()
}