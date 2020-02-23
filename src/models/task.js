const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
        default:false,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectID,
        ref:"User",
        required:true,
    }
},{
    timestamps:true
})
const Task = mongoose.model("Task",taskSchema)
module.exports = Task