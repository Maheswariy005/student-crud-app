const mongoose = require("mongoose");

const studentScheme = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique : true
    },
    age:{
        type:Number
    },

} ,{
        timestamps: true
    }
);

const Student = mongoose.model("Student",studentScheme);

module.exports = Student;