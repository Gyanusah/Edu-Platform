
import { User } from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import  jwt from "jsonwebtoken";

// Simple email regex for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // 1️⃣ Validate all fields
        if (!name || !email || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // 2️⃣ Validate email format
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email format",
            });
        }

        // 3️⃣ Validate password length (>5)
        if (password.length <= 5) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters long",
            });
        }

        // 4️⃣ Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        // 5️⃣ Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 6️⃣ Create new user
        await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        });

        return res.status(201).json({
            success: true,
            message: "Account created successfully",
        });
    } catch (error) {
        console.error("Something went wrong:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to register",
        });
    }
};

export const login=async(req,res)=>{
try {
    const{email,password}=req.body;

    //all fields are required 
    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        })
        
    }
    //to check  email
    const user=await User.findOne({email})
if(!user){
    return res.status(400).json({
        success:false,
        message:"incorrect email or password"
    })

}
//check password
    const isPassword = await bcrypt.compare(password,user.password)
    if (!isPassword) {
        return res.status(400).json({
            success: false,
            message: "incorrect email or password"
        })

    }

//Generatet token
const token= jwt.sign({ userId:user._id},process.env.SECRET_KEY,{expiresIn:"1d"})
return res.cookie("token",token,{httpOnly:true,sameSite:'strict',maxAge:1*24*60*60*1000}).json({
    message:`Welcome Back ${user.  name}`,
    success:true,
    user
})


} catch (error) {
    
    console.error("Something went wrong:", error);
    return res.status(500).json({
        success: false,
        message: "Failed to login",
    });
}

}
 export const logout=async(__,res)=>{
    try {
        
        return res.status(200).cookie("token"," ",{maxAge:0})
    .json({
        message:"Logout successfully",
        success:true
    })
    } catch (error) {
        console.error("Something went wrong:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to logout",
        }); 
    }
}


// export default {register,login,logout};