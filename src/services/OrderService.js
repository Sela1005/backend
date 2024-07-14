const Order = require("../models/OrderProduct")

const createOrder = (newOrder) => {
    return new Promise(async(resolve, reject)=> {
        const {orderItems, paymentMethod, itemsPrice, shippingPrice, fullName,address,city, phone,totalPrice,user} = newOrder
        try{
            const createdOrder = await Order.create({
                orderItems,
                shippingAddress: {
                    fullName,
                    address,
                    city,
                    phone
                },
                paymentMethod,
                itemsPrice,
                shippingPrice,
                totalPrice,
                user: user,
            })
            if(createdOrder){
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createdOrder
                })
            }
        }catch (e){
            console.log('e', e)
            reject(e)
        }
    })
}
module.exports = {
    createOrder,
}