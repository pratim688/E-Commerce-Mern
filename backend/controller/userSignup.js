import User from "../models/userModel.js"
import bcrypt from 'bcryptjs'

export const userSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists', success:false })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ name, email, password: hashedPassword })
        res.status(201).json({ message: 'User created successfully', user, success:true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

