import mongoose from "mongoose";
const topicSchema= new mongoose.Schema({
 title:{
   type:String,
   required:true
},
detail:{
    type:String,
    required:true
},
percentage:{
  type: Number,
  required: true
}
})
const Topic = mongoose.model('topic', topicSchema)
export default Topic;
