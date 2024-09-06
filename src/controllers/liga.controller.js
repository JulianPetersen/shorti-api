import Liga from '../models/liga'
import appConfig from '../config';

export const createLiga = async (req, res) => {

    try {
        console.log(req.body)
        const { nombreLiga, imgUrl, campeonLiga} = req.body
        const newLiga = new Liga({ nombreLiga, imgUrl, campeonLiga })
        if (req.file) {
            const { filename } = req.file;
            newLiga.setImgUrl(filename)
        }
        const LigaSaved = await newLiga.save();
        res.status(201).json(LigaSaved);
    } catch (error) {
        res.status(400).json(error)
    }

}

export const getAllLigas = async (req,res) => {
    try {
        const allLigas = await Liga.find()
        res.status(200).json(allLigas)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getLigaById = async (req,res) => {

    try {
        const liga = await Liga.findById(req.params.ligaId)
        res.status(200).json(liga)
    } catch (error) {
        res.status(400).json(error)
    }
}


export const updateLiga = async (req,res) => {
    try {
        if (req.file) {
            const { filename } = req.file;
            const {host, port} = appConfig
            console.log(host)
            req.body.imgUrl =  `${host}/public/${filename}`
        }
        console.log(req.body)
        const updateLiga =  await Liga.findByIdAndUpdate(req.params.ligaId, req.body,{
            new:true
        })
        res.status(201).json({
            result:"ok",
            newLiga:updateLiga
        });
    } catch (error) {
        res.status(400).json(error)
    }
}


export const deleteLiga = async (req,res) => {
    try {
        const deleteLiga = await Liga.findByIdAndDelete(req.params.ligaId)
        res.status(201).json({message:'OK'})
    } catch (error) {
        res.status(400).json({message:error})
    }
    
}