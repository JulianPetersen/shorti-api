import Team from '../models/Equipo'
import appConfig from '../config';


export const createTeam = async (req, res) => {

    try {
        const { nombreEquipo, imgUrl, puntosTorneo, cantVictorias, cantDerrotas,ligaId } = req.body
        const newTeam = new Team({ nombreEquipo, imgUrl, puntosTorneo, cantVictorias, cantDerrotas,ligaId })
        if (req.file) {
            const { filename } = req.file;
            newTeam.setImgUrl(filename)
        }
        const teamSaved = await newTeam.save();
        res.status(201).json(teamSaved);
    } catch (error) {
        res.status(400).json(error)
    }

}

export const getTeams = async (req, res) => { 
    try {
        const equipos = await Team.find()
        .populate('ligaId')
        res.json(equipos);
    } catch (error) {
        res.status(400).json(error);
    }
    
}

export const getTeamById = async (req, res) => { 
    try {
        const team = await Team.findById(req.params.teamId)
        .populate('ligaId')
        res.json(team);
    } catch (error) {
        res.status(400).json(error);
    }
    
}

export const getTeamByLigaId = async (req, res) => { 
    try {
        const team = await Team.find({ligaId:req.params.ligaId})
        .populate('ligaId')
        res.json(team);
    } catch (error) {
        res.status(400).json(error);
    }
    
}

// export const updateTeam = async (req,res) => {
//     const updatedTeam =  await Team.findByIdAndUpdate(req.params.teamId, req.body,{
//         new:true
//     })
//     res.status(201).json({
//         result:"ok",
//         newTeam:updatedTeam
//     });
// }


export const updateTeam = async (req,res) => {
    try {
        if (req.file) {
            const { filename } = req.file;
            const {host, port} = appConfig
            console.log(host)
            req.body.imgUrl =  `${host}/public/${filename}`
        }
        console.log(req.body)
       
        const updatedTeam =  await Team.findByIdAndUpdate(req.params.teamId, req.body,{
            new:true
        })
        res.status(201).json({
            result:"ok",
            newLiga:updatedTeam
        });
    } catch (error) {
        res.status(400).json(error)
    }
}

export const deleteTeam = async (req,res) => {
    try {
        const deleteTeam = await Team.findByIdAndDelete(req.params.teamId)
        res.status(201).json({message:'OK'})
    } catch (error) {
        res.status(400).json({message:error})
    }
    
}