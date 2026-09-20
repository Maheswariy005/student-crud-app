const Student = require("./../models/Student");

const createStudent = async(req,res)=>{
    try{
        const {name,email,age} = req.body;
        const student = await Student.create({
            name,email,age
        });

        res.status(201).json(student);
    }catch(error){
        res.status(500).json({
            message:"failed to create student",
            error:error.message
        });
    }
};

module.exports = {createStudent}