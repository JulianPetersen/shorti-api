import Premio from '../models/premio'

export const createPremio = async (req, res) => {
    try {
        const { cantidad, fecha } = req.body
        const newPremio = new Premio({ cantidad, fecha })
        const premioSaved = await newPremio.save();
        res.status(201).json(premioSaved);
    } catch (error) {
        res.status(401).json(error)
    }
}

export const getPremios = async (req, res) => {
    const premio = await Premio.find()
    res.json(premio);
}

export const updatePremio = async (req,res) => {
    const updatedPremio =  await Premio.findByIdAndUpdate(req.params.premioId, req.body,{
        new:true
    })
    res.status(200).json(updatedPremio);
}

