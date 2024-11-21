import User from "../models/userModel.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const userSignInController = async (req, res) => {
    try{
        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({message:'All fields are required',success:false})
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:'User not found',success:false})
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password)
        if(!isPasswordMatch){
            return res.status(400).json({message:'Invalid password',success:false})
        }
        
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined in environment variables')
        }
        
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.cookie('token',token,{httpOnly:true})
        res.status(200).json({message:'User logged in successfully',user,success:true})

    }catch(error){
        console.log(error)
        return res.status(500).json({message: error.message, success: false})
    }   
}

export default userSignInController