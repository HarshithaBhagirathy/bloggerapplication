const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

let hashPassword  = async(password)=>{
    let salt = await bcrypt.genSalt(Number(process.env.SALTROUNDS))
    let hash = await bcrypt.hash(password,salt)
    return hash
}

let hashCompare = async(password,hashedPassword)=>{
    return await bcrypt.compare(password,hashedPassword)
}

let createToken = async(data)=>{
    console.log(process.env.JWTSECRETKEY)
    let token = await jwt.sign(
        data,process.env.JWTSECRETKEY,{expiresIn:'1m'})
    return token
}

let decodeToken = async(token)=>{
    let payload =  await jwt.decode(token)
    return payload
}

let validate = async(req,res,next)=>{
    let token = req.headers.authorization?req.headers.authorization.split(" ")[1]:undefined;
    if(token!==undefined)
    {
            next()
    }
    else
        res.send({statusCode:400,message:"Invalid or Missing Token"})
}

module.exports={hashPassword,hashCompare,createToken,decodeToken,validate}
