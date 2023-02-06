import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name:{
    type:String,
    reuired:true
  }  
})
const User=mongoose.model('User5',userSchema)
export default User;