


import React, { useState } from "react";
import { Link ,useNavigate } from "react-router-dom";


export default function SignUp() {
  const navigate=useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "student", // ✅ lowercase value (consistent)
  });


   const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!user.email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    if (user.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name.trim(),
          email: user.email.trim(),
          password: user.password.trim(),
          role: user.role.trim(),
        }),
      });

      const data = await response.json();
      console.log("Response:", data);

      if (response.ok) {
        alert("User created successfully!");
        setUser({ name: "", email: "", password: "", role: "" });
      navigate("/login");
      } else {
        if (data.errors) {
          alert(data.errors.map((err) => err.msg).join("\n"));
        } else {
          alert("Failed to create user.");
        }
      }
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Something went wrong.");
    }
  };

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={onChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={onChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
            />
            <p className="text-xs text-gray-500 mt-1">
              We'll never share your email with anyone else.
            </p>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={onChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Minimum 6 characters"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Role</label>

            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={user.role === "student"}
                  onChange={onChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm font-medium">Student</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="instructor"
                  checked={user.role === "instructor"}
                  onChange={onChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm font-medium">Instructor</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition"
          >
            Create Account
          </button>

          {/* Link to Login */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-600 font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
