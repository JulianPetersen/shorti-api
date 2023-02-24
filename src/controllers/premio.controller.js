import Premio from '../models/premio'
import InfoUsuario from '../models/infoUsuario'
import SorteoRealizado from '../models/sorteoRealizado'

export const createPremio = async (req, res) => {
    try {
        const { cantidad, fecha, participantes,cantParticipaciones } = req.body
        const newPremio = new Premio({ cantidad, fecha,participantes,cantParticipaciones })
        const premioSaved = await newPremio.save();
        res.status(201).json(premioSaved);
    } catch (error) {
        res.status(401).json(error)
    }
}

export const getPremios = async (req, res) => {
    const premio = await Premio.find().sort({$natural: -1}).limit(1)
    res.json(premio);
}

export const addParticipante = async (req,res) => {
    const premio = await Premio.find().sort({$natural: -1}).limit(1)
    for(let i = 0; i < req.body.cantParticipaciones; i++){
        premio[0].participantes.push(req.body.participantes)
    }
    premio[0].save();
    //obtengo la informacion del usuario
    const infouser = await InfoUsuario.findOne({usuario:req.body.participantes})
    //resto los puntos por la cantidad de participaciones.
    const infouserUpdated = await InfoUsuario.findByIdAndUpdate(infouser._id, {puntosObtenidos: infouser.puntosObtenidos - req.body.cantParticipaciones})
    const updatedPremio =  await Premio.findOneAndUpdate({_id:premio[0]._id},{cantParticipaciones: premio[0].cantParticipaciones + req.body.cantParticipaciones},{
        new:true
    })
    res.status(200).json(updatedPremio); 
}

export const updateGanador = async (req,res) => {
    const updatePremio = await Premio.findByIdAndUpdate(req.body.sorteoId,{
        ganador:req.body.ganador
    },{new:true})
    const infoUser = await InfoUsuario.findOne({usuario:req.body.ganador}) 
    console.log(infoUser)
    await InfoUsuario.findByIdAndUpdate(infoUser._id, {dineroObtenido: infoUser.dineroObtenido + updatePremio.cantidad})
    await SorteoRealizado.create(
        {
            cantidad:updatePremio.cantidad, 
            fecha:updatePremio.fecha, 
            cantParticipaciones:updatePremio.cantParticipaciones,
            ganador:updatePremio.ganador
        })
    res.status(200).json(updatePremio) 
}

