import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

},{timestamps:true});

const User = mongoose.models.users || mongoose.model("users",userSchema);
export default User;

