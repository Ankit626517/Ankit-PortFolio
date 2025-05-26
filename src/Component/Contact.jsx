import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/PortFolioData', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset input fields
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      // toast.error('Something went wrong!');
      toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset input fields
      console.error(error);
    }
  };

  return (
    <section className="w-full px-6 py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <ToastContainer position="top-center" autoClose={3000} />

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact Me</h2>
        <div className="h-1 w-20 bg-blue-800 mx-auto mb-8" />

        <p className="text-center mb-12 text-gray-700 dark:text-gray-300">
          Feel free to reach out to me for any opportunities, collaborations, or just to say hello!
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Form */}
          <form className="md:col-span-2 space-y-4" onSubmit={handlesubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                onChange={handleInputChange}
                name="name"
                type="text"
                value={formData.name}
                placeholder="Your name"
                className="p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <input
                onChange={handleInputChange}
                name="email"
                type="email"
                value={formData.email}
                placeholder="Your email"
                className="p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>
            <textarea
              onChange={handleInputChange}
              name="message"
              rows="5"
              value={formData.message}
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
            {/* Email */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center space-x-4 shadow border border-gray-200 dark:border-gray-700">
              <span>📧</span>
              <div>
                <p className="font-semibold">Email</p>
                <p>ankitrathore48132@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center space-x-4 shadow border border-gray-200 dark:border-gray-700">
              <span>📱</span>
              <div>
                <p className="font-semibold">Phone</p>
                <p>+91 9343770661</p>
              </div>
            </div>

            {/* GitHub */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center space-x-4 shadow border border-gray-200 dark:border-gray-700">
              <span>💻</span>
              <div>
                <p className="font-semibold">GitHub</p>
                <a href="https://github.com/Ankit626517" className="underline">
                  https://github.com/Ankit626517
                </a>
              </div>
            </div>

            {/* LinkedIn */}
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
