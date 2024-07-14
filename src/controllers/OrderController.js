const Orderservice = require('../services/OrderService')

const createOrder = async (req, res) => {
    try {
        const {paymentMethod, itemsPrice, shippingPrice,fullName,address,city,phone} = req.body
        if(!paymentMethod||!itemsPrice||!shippingPrice||!fullName||!address||!city||!phone){
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await Orderservice.createOrder(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
module.exports = {
    createOrder,
}