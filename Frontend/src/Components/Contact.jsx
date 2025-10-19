import React ,{useState}from 'react'

import {MapPin,Phone,Mail,Clock} from "lucide-react"
import  ContactForm  from "../utils/contactForm";
import FrequentlyAksQuestion from '../utils/FrequentlyAksQuestion';
export default function Contact() {
const[inputValue,setINputValue]=useState("")
const contact = [
  {
    icon: <MapPin  className="w-8 h-8 text-white"/>,
    Title: "Visit Our School",
    message: " 23 Education Street ",
    time: "Mon-fry 9Am-6pm",
  },
  {
    icon: <Phone className="w-8 h-8 text-white"/>,
    Title: "Call Us",
    contact: " 9828345869 ",
    time: "Mon-fry 9Am-6pm",
  },
  {
    icon: <Mail  className="w-8 h-8 text-white"/>,
    Title: "Email Support",
    message: " info@eduplatform.com ",
  },
  {
    icon: <Clock  className="w-8 h-8 text-white"/>,
    Title: "Office Hours",
    message: " Monday - Friday: 9AM - 6PM ",
  },
];


  return (
    <section className=" bg-gray-100  min-h-screen sm:p-8 mx-auto py-12 lg:py-24  ">
      <div
        className="    flex justify-center  pt-10 w-full    sm:p-12
         text-gray-400 text-center 
         "
      >
        <div className="text-center mb-5 sm:mb-5 max-w-3xl mx-auto grid ">
          <h1
            className="text-3xl sm:text-4xl lg:text-4xl font-extrabold mb-4
           bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600  
             drop-shadow-[0_0_10px_rgba(180,110,260,0.8)]
        "
          >
            Get In Touch{" "}
          </h1>

          <p
            className="text-base sm:text-lg text-black px-4
          "
          >
            Have questions about our courses or need guidance on your learning
            journey? We're here to help you succeed. Reach out to our team of
            education experts.
          </p>
        </div>
      </div>
      <div className="mt-2 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {contact.map((contact, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
                {contact.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900">
              {contact.Title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">{contact.message}</p>
          </div>
        ))}
      </div>
      <div className=" gap-0 lg:gap-0 mt-10">
        <div className="   ">
          <ContactForm /> <FrequentlyAksQuestion />
        </div>
        
      </div>
    </section>
  );
}

