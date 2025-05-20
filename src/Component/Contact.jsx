import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons'; // 🔁 make sure this component is present

function Contact() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", {
      name: fname,
      email,
      message
    });
  };

  return (
      <section className="w-full px-6 py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact Me</h2>
        <div className="h-1 w-20 bg-blue-800 mx-auto mb-8" />

        <p className="text-center mb-12 text-gray-700 dark:text-gray-300">
          Feel free to reach out to me for any opportunities, collaborations, or just to say hello!
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Form */}
          <form className="md:col-span-2 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <input
                type="email"
                placeholder="Your email"
                className="p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-md bg-blue-300 hover:bg-blue-400 hover:cursor-pointer text-black font-semibold transition-all"
            >
              Send Message
            </button>
             {/* Social Icons */}
             <div className="flex justify-center space-x-4 mt-4">
             <SocialIcons />
             </div>
          </form>
         
          
       
          


          {/* Contact Info */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center space-x-4 shadow border border-gray-200 dark:border-gray-700">
              <span>📧</span>
              <div>
                <p className="font-semibold">Email</p>
                <p>ankitrathore48132@gmail.com</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center space-x-4 shadow border border-gray-200 dark:border-gray-700">
              <span>📱</span>
              <div>
                <p className="font-semibold">Phone</p>
                <p>+91 9343770661</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center space-x-4 shadow border border-gray-200 dark:border-gray-700">
              <span>💻</span>
              <div>
                <p className="font-semibold">GitHub</p>
                <a href="https://github.com/Ankit626517" className="underline">
                  https://github.com/Ankit626517
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center space-x-4 shadow border border-gray-200 dark:border-gray-700">
              <span>🔗</span>
              <div>
                <p className="font-semibold">LinkedIn</p>
                <a href="https://www.linkedin.com/in/ankit-rathore-256b91235/" className="underline">
                  linkedin.com/in/ankit-rathore-256b91235
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
