const userLogout = async(req,res)=>{
    try{    
        if(!req.cookies.token){
            return res.status(401).json({success:false,message:"Unauthorized"})
        }
        res.clearCookie('token')
        res.status(200).json({success:true,data:null,message:"Logout Successfully"})
    }catch(error){
        res.status(500).json({success:false,data:null,message:"Internal Server Error"})
    }
}

export default userLogout;


