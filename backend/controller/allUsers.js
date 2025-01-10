import User from "../models/userModel.js"

const allUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({ message: 'All users fetched successfully', users, success: true })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message, success: false })
    }
}
export default allUsers