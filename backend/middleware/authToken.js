import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
const authToken = async (req, res, next) => {
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({message:'Unauthorized',success:false})
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id)
    if(!req.user){
        return res.status(401).json({message:'Unauthorized',success:false})
    }
    next()
}
export default authToken