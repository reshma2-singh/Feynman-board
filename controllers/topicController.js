import Topic from "../models/topicModel.js"
const createTopic = async(req,res)=>{
   try{
const topic= await Topic.create(req.body)
res.status(201).json({
    status:"success",
    data:{
        topic
    }
})
   } 
   catch(err){
res.status(500).json({
    status:'failure',
    message: err?.message

})
   }
}
const getTopic=async(req,res)=>{
    try{
        const topic= await Topic.find()
        res.status(200).json({
            status:'success',
            data:topic
        })

    }catch(err){
        res.status(500).json({
            status:'failure',
            message:err?.message
        })
    }
}
export { createTopic, getTopic }