import Fechas from '../models/fechas'

export const createFecha = async (req, res) => {

    try {
        const { FechaNumero, diaComienza, diaTermina,ligaId} = req.body
        const newFecha = new Fechas({ FechaNumero, diaComienza, diaTermina,ligaId })
        const FechaSaved = await newFecha.save();
        res.status(201).json(FechaSaved);
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getAllFechas = async (req,res) => {
    try {
        const allFechas = await Fechas.find()
        .populate('ligaId')
        res.status(200).json(allFechas);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const getFechaById = async (req,res) => {
    try {
        const fecha =  await Fechas.findById(req.params.fechaId)
        .populate('ligaId');
        res.status(200).json(fecha);
    } catch (error) {
        res.status(400).json(error)
    }
}


export const getFechasByLiga = async (req,res) => {
    try {
        const fecha =  await Fechas.findOne({ligaId:req.params.ligaId})
        .populate('ligaId');
        res.status(200).json(fecha);
    } catch (error) {
        res.status(400).json(error)
    }
}

export const updateFecha = async (req,res) => {
    try {
        const updatedFecha = await Fechas.findByIdAndUpdate(req.params.fechaId,req.body,{
            new:true
        })
        res.status(201).json({
            result:"ok",
            newLiga:updatedFecha
        });
    } catch (error) {
        res.status(400).json(error)
    }
}

export const deleteFecha = async (req,res) => {
    try {
        const deletedFecha = await Fechas.findByIdAndDelete(req.params.fechaId)
        res.status(200).json({
            messagge:'OK'
        })
    } catch (error) {
        res.status(400).json(error)
    }
}