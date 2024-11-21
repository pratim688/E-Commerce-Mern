import User from "../models/userModel.js"
const userDetailsController = async (req, res) => {
    try{
        //console.log(req.user)
        const user = await User.findById(req.user.id)//coming from authToken middleware
        if(!user){
            return res.status(404).json({message:'User not found',success:false})
        }
        res.status(200).json({user,success:true})
    }catch(error){
        console.log(error)
        return res.status(500).json({message: error.message, success: false})
    }
}
export default userDetailsController