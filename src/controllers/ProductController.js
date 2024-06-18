const ProductService = require('../services/ProductService')

const createProduct = async (req, res) => {
    try {
        const {name, image, type, price, countInStock,rating,description} = req.body
        if(!name|| !image|| !type|| !price|| !countInStock|| !rating) {
            return res.status(200).json({
                status: "ERR",
                message: "The input is required"
            })
        }
        const response = await ProductService.createProduct(req.body)
        return res.status(200).json(response)
    } catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const data = req.body
        if(!productId){
            return res.status(200).json({
                status: "ERR",
                message: "The productId is required"
            })
        }
        const response = await ProductService.updateProduct(productId,data)
        return res.status(200).json(response)
    } catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailProduct = async (req, res) => {
    try {
        const ProductId = req.params.id
        if(!ProductId){
            return res.status(200).json({
                status: "ERR",
                message: "The ProductId is required"
            })
        }
        const response = await ProductService.getDetailProduct(ProductId)
        return res.status(200).json(response)
    } catch(e) {
        return res.status(404).json({
            message: e
        })
    }
}


// const deleteUser = async (req, res) => {
//     try {
//         const userId = req.params.id
//         if(!userId){
//             return res.status(200).json({
//                 status: "ERR",
//                 message: "The userId is required"
//             })
//         }
//         const response = await UserService.deleteUser(userId)
//         return res.status(200).json(response)
//     } catch(e) {
//         return res.status(404).json({
//             message: e
//         })
//     }
// }


module.exports = {
    createProduct,
    updateProduct,
    getDetailProduct
}
