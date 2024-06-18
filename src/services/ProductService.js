const Product = require("../models/ProductModel")


const createProduct = (newProduct) => {
    return new Promise( async (resolve, reject) => {
        const {name, image, type, price, countInStock,rating,description} = newProduct
        try {
            const checkProduct = await Product.findOne({
                name: name
            })
           if(checkProduct !== null) {
                resolve({
                    status: "OK",
                    message: "The name of product is already"
                })
           }
            const newProduct =await Product.create({
                name, 
                image, 
                type, 
                price, 
                countInStock,
                rating,
                description
            })
            if(newProduct){
                resolve({
                    status: "OK",
                    message: "SUCCESS",
                    data: newProduct
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

const updateProduct = (id,data) => {
    return new Promise( async (resolve, reject) => {
        try {
            const checkProduct = await Product.findOne({
                _id: id

            })
           if(checkProduct == null) {
                resolve({
                    status: "OK",
                    message: "The product is not defined"
                })
           }

           const updatedProduct = await Product.findByIdAndUpdate(id, data, {new: true})
            resolve({
                status: "OK",
                message: "SUCCESS",
                data: updatedProduct
                })
        } catch (e) {
            reject(e)
        }
    })
}


// const deleteUser = (id) => {
//     return new Promise( async (resolve, reject) => {
//         try {
//             const checkUser = await User.findOne({
//                 _id: id

//             })
//            if(checkUser == null) {
//                 resolve({
//                     status: "OK",
//                     message: "The user is not defined"
//                 })
//            }
           
//            await User.findByIdAndDelete(id)
//             resolve({
//                 status: "OK",
//                 message: "DELETE USER SUCCESS",
//                 })
//         } catch (e) {
//             reject(e)
//         }
//     })
// }

// const getAllUser = () => {
//     return new Promise( async (resolve, reject) => {
//         try {
//            const allUser= await User.find()
//             resolve({
//                 status: "OK",
//                 message: "SUCCESS",
//                 data: allUser
//                 })
//         } catch (e) {
//             reject(e)
//         }
//     })
// }

const getDetailProduct  = (id) => {
    return new Promise( async (resolve, reject) => {
        try {
            const product = await Product.findOne({
                _id: id

            })
           if(product == null) {
                resolve({
                    status: "OK",
                    message: "The product is not defined"
                })
           }
           
            resolve({
                status: "OK",
                message: "SUCCESS",
                data: product
                })
        } catch (e) {
            reject(e)
        }
    })
}


module.exports = {
    createProduct,
    updateProduct,
    getDetailProduct
    
}