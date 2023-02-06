import User from "../models/userModel.js";
const createUser= async(req,res)=>{
    try{
        const user=await User.create(req.body)
        res.status(201).json({
            status:"success",
            data:{
                user
            }
        })
      

    }catch(err){
        res.status(500).json({
            status:'failure',
            message:err?.message
        })
    }  
}
const getUser = async(req,res)=>{
    try{
        const user=await User.find()
        res.status(200).json({
            status:'success',
            results:user.length,
            data:user
        })
    }catch(err){

    }
}
export { createUser,getUser}