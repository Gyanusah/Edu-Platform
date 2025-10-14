import React,{useState} from 'react'

export default function ContactForm() {


  const [formData , setFormData]=useState({
    name:"",
    email:"",
    subject:"",
    message:"",
  });
  const handleChange=(e)=>{
const {id,value}=e.target;
setFormData((prev)=>({...prev,[id]:value}))
  }
const handleSubmit=(e)=>{
  e.preventDefault();


  // Simple validation
  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill in all required fields.");
    return;
  }
  if (!formData.email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  console.log("Form submitted:", formData);

  // Simulate sending the message
  alert("Message sent successfully!");

  // Reset the form
  setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  }
  return (
    <div className="lg:ml-15 mt-20">
      <form
        onSubmit={handleSubmit}
        className="h-110 w-100 bg-white border-l-black rounded-2xl shadow-2xl 
       "
      >
        <div className="">
          <h1 className="text-xl font-black flex justify-center pt-5 pb-3 ">
            Send Us a Message
          </h1>

          <div className="pl-5 flex flex-col justify-center rounded-2xl gap-6">
            {/* Full Name */}
            <div className=" w-80 group">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-2 border border-gray-300 rounded-lg 
    focus:outline-none focus:ring-2 focus:ring-blue-500 
    transition-all duration-300 peer"
              />
              <label
                htmlFor="name"
                className="absolute left-3 top-2 text-gray-500 transition-all duration-300 
                 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400
                 peer-placeholder-shown:text-base 
                 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500
                 group-hover:-top-3 group-hover:text-sm group-hover:text-blue-500"
              >
               
              </label>
            </div>

            {/* Email */}
            <div className=" w-80 group">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 peer"
              />
              <label
                htmlFor="email"
                className="absolute left-3 top-2 text-gray-500 transition-all duration-300 
                 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400
                 peer-placeholder-shown:text-base 
                 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500
                 group-hover:-top-3 group-hover:text-sm group-hover:text-blue-500"
              >
               
              </label>
            </div>

            {/* Subject */}
            <div className=" w-80 group">
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject "
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 peer"
              />
              <label
                htmlFor="subject"
                className="absolute left-3 top-2 text-gray-500 transition-all duration-300 
                //  peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400
                //  peer-placeholder-shown:text-base 
                 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500
                 group-hover:-top-3 group-hover:text-sm group-hover:text-blue-500"
              >
               
              </label>
            </div>

            {/* Message */}
            <div className="w-80 Group ">
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" message"
                className="w-full p-2 h-24 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 peer resize-none"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-3 top-2 text-gray-500 transition-all duration-300 
                 peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400
                 peer-placeholder-shown:text-base 
                 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500
                 group-hover:-top-3 group-hover:text-sm group-hover:text-blue-500"
              >
               
              </label>
            </div>
          </div>
        </div>
        <div
          className=" flex  justify-center mt-5 h-10 min-w-40
        "
        >
          <button
            className=" w-85 bg-blue-500 text-white font-semibold rounded-lg 
             shadow-md hover:bg-blue-600 hover:scale-105 
             transition-all duration-300
          "
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

