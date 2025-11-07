import  Course  from "../models/courseSchema.js";

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
};



export const createCourse= async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(201).json({ success: true, message: "Course added successfully!", course });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const deleteCourse= async( req,res)=>{
    try {
        const course= await Course.findById(req.params.id)
        if(!course){
            return res.status(404).json({
                success:false,
                 message:"Course not Found"           
                 })
        }
        await course.deleteOne();
        res.status(200).json({
            success:true,
            message:"Course deleted successfully"
        })

    } catch (error) {
        res.status(500).json({
            sucess:false,
            message:error.message
        })
    }
}
