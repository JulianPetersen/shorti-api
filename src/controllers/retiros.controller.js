import Retiros from '../models/retiros'
import InfoUsuario from '../models/infoUsuario'


export const createNewRetiro = async (req, res) => {
    try {
        const { usuario, cbu, alias, monto, fecha, estado,nombre,apellido } = req.body
        const newRetiro = new Retiros({ usuario, cbu, alias, monto, fecha, estado, nombre,apellido})
        const infoUsuario = await InfoUsuario.findOne({usuario:usuario})
        const infoUsuarioUpdate = await InfoUsuario.findByIdAndUpdate(infoUsuario._id, {dineroObtenido:infoUsuario.dineroObtenido - monto})
        const newRetiroSaved = await newRetiro.save();
        res.status(201).json(newRetiroSaved);
    } catch (error) {
        res.status(401).json(error)
    }
}

export const getRetiros = async (req,res) => {
    const retiros = await Retiros.find()
    .populate('usuario')
    res.json(retiros)
}

export const getRetirosByUser = async (req,res) => {
    const retiros = await Retiros.find({usuario:req.params.id})
    .populate('usuario')
    res.json(retiros)
}

export const updateEstadoPagado = async (req,res) => {
    const updateRetiro =  await Retiros.findByIdAndUpdate(req.params.estado, req.body,{
        new:true
    })
    res.status(200).json(updateRetiro);
}


