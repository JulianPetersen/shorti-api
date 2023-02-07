import InfoUsuario from '../models/infoUsuario'

export const createInfoUser = async (req, res) => {
    try {
        const { usuario, puntosObtenidos } = req.body
        const newInfoUsuario = new InfoUsuario({ usuario, puntosObtenidos})
        const newInfoSaved = await newInfoUsuario.save();
        res.status(201).json(newInfoSaved);
    } catch (error) {
        res.status(401).json(error)
    }
}

export const getInfoUser = async (req, res) => {
    const infouser = await InfoUsuario.find()
    .populate('usuario')

    res.json(infouser);
} 

export const getInfoUserByuserId = async  (req,res) => {

    const infouser = await InfoUsuario.find({usuario:req.params.userId})
    .populate('usuario')
    res.json(infouser)   
} 


export const updateInfoUser = async (req,res) => {
    const buscarInfo = await InfoUsuario.findOne({usuario:req.params.userId}) 
    const updatePremio =  await InfoUsuario.findOneAndUpdate({usuario:req.params.userId}, {puntosObtenidos:buscarInfo.puntosObtenidos + req.body.puntosObtenidos},{
        new:true
    })
    res.status(200).json(updatePremio);   
}

// export const updatePartido = async (req,res) => {
//     const updatedPartido =  await Partido.findByIdAndUpdate(req.params.partidoId, req.body,{
//         new:true
//     })
//     res.status(204).json(updatedPartido);  
// }

// export const deletePartido = async (req,res) => {
//     const deletedPartido =  await Partido.findByIdAndDelete(req.params.partidoId)
//     res.status(204).json() 
// }

