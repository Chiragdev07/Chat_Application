import mongoose from "mongoose";

const messageShema=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
     },
     recerverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
     },
     message:{
        type:String,
        required:true,
     }
    },{timestamps:true})

    const Message=mongoose.model("Message",messageShema);

    export default Message;