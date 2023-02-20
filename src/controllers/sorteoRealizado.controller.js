import SorteoRealizado from '../models/sorteoRealizado'

export const createSorteoRealizado = async (req,res) => {
    const {cantidad,Fecha,cantParticipaciones,ganador} = req.body
    const newSorteoRealizado =  new SorteoRealizado({cantidad,Fecha,cantParticipaciones,ganador})
    const sorteoRealizadoSaved = await newSorteoRealizado.save();
    res.status(201).json(sorteoRealizadoSaved);
}

export const getSorteoRealizado = async (req, res) => {
    const sorteoRealizado = await SorteoRealizado.find().sort({$natural: -1}).limit(1)
    .populate('ganador')
    res.json(sorteoRealizado);
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