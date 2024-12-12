const jwt = require('jsonwebtoken')
const { token } = require('../config')
module.exports = (req, res, next) => {
    try{
        if (req.path === '/login') next()
            const Authorization = req.headers.authorization
            const data=jwt.verify(Authorization, token)
            console.log(data);
            next()
    }catch{
        res.status(401).end('Unauthorized request')
    }
}