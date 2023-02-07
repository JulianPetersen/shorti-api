import User from '../models/User'

export const createUser = (req,res) => {
    res.json('creating user')
}

export const getUserById = async (req,res) => {
    const user = await User.findById(req.params.userId)
    res.status(200).json(user);
}