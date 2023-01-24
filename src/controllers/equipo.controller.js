import Equipo from '../models/Equipos'

export const createEquipo = async (req,res) => {
    const {name,liga,imgUrl} = req.body
    const newProduct =  new Equipo({name,liga,imgUrl})
    const equipoSaved = await newProduct.save();
    res.status(201).json(equipoSaved);
}

export const getEquipos = async (req,res) => {
    const equipos = await Equipo.find();
    res.json(equipos);
}

// export const getProductById = async (req,res) => {
//     const product = await Product.findById(req.params.productId)
//     res.status(200).json(product);
// }

// export const updateProductsById = async (req,res) => {
//     const updatedProduct =  await Product.findByIdAndUpdate(req.params.productId, req.body,{
//         new:true
//     })
//     res.status(204).json(updatedProduct);
// }

// export const deleteProductById = async (req,res) => {
//     const deletedProduct =  await Product.findByIdAndDelete(req.params.productId)
//     res.status(204).json()
// }