const UserService = require('../services/UserService')

const createUser = async (req, res) => {
    try {
        console.log(req.body)
        const {name, email, password, confirmPassword, phone} = req.body
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const isCheckEmail = reg.test(email)
        if(!name|| !email|| !password|| !confirmPassword|| !phone) {
            return res.status(200).json({
                status: "ERR",
                message: "The input is required"
            })
        }
        console.log('isCheckEmail',isCheckEmail)
        const result = await UserService.createUser(req.body)
        return res.status(200).json(result)
    } catch(e) {
        return res.status(404).json({
            message: e.message
        })
    }
}

module.exports = {
    createUser
}
