import React from 'react'

export default function FrequentlyAksQuestion() {
  return (
    <div className="  mt-20   lg:ml-80 ">
      <h1 className="text-2xl font-bold flex justify-center lg:text-3xl ">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-60 opacity-70 flex justify-center ">
        Quick answers to common questions about our programs and services.
      </p>
      <div className="lg:ml-30">
        <div
          className=" w-150 bg-gray-400 text-white 
          pl-4 m-3 rounded-xl "
        >
          <h1 className="font-bold text-black  opacity-90 pt-2 ">
            How do I enroll in a course?
          </h1>
          <p className="text-gray-9 flex justify-center pb-2 ">
            Browse our course catalog, select your preferred course, and click
            "Enroll Now". You can choose between online and offline options
            during registration.
          </p>
        </div>

        <div className=" w-150 bg-gray-400 text-white pl-4 m-3 rounded-xl">
          <h1 className="font-bold text-black  opacity-90 pt-2 ">
            Do you offer certificates?
          </h1>
          <p className="text-gray-9 flex justify-center pb-2">
            Yes! All our courses include industry-recognized certificates upon
            successful completion. Many are also accredited by leading
            professional organizations.
          </p>
        </div>

        <div className=" w-150 bg-gray-400 text-white pl-4 m-3 rounded-xl">
          <h1 className="font-bold text-black  opacity-90 pt-2 ">
            What's the difference between online and offline courses?
          </h1>
          <p className="text-gray-9 flex justify-center pb-2">
            Online courses offer flexibility to learn at your pace, while
            offline courses provide hands-on experience in our state-of-the-art
            facilities with direct instructor interaction.
          </p>
        </div>

        <div className=" w-150 bg-gray-400 text-white pl-4 m-3 rounded-xl">
          <h1 className="font-bold text-black  opacity-90 pt-2 ">
            Do you offer payment plans?
          </h1>
          <p className="text-gray-9 flex justify-center pb-2">
            Absolutely! We offer flexible payment options including monthly
            installments, early bird discounts, and scholarship opportunities
            for qualified students.
          </p>
        </div>
      </div>
    </div>
  );
}
