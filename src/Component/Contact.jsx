import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  MdEmail,
  MdMessage,
  MdPerson,
  MdLocationOn,
  MdPhone
} from 'react-icons/md';
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram
} from "react-icons/fa";

function SocialIcons() {
  return (
    <ul className='flex flex-wrap gap-4 mt-4'>
      <li>
        <a href='mailto:ankitrathore48132@gmail.com' target="_blank" rel="noopener noreferrer">
          <FaEnvelope size={22} className='text-gray-500 hover:text-red-500' />
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/ankit-rathore-256b91235/' target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={22} className='text-gray-500 hover:text-blue-700' />
        </a>
      </li>
      <li>
        <a href='https://github.com/Ankit626517' target="_blank" rel="noopener noreferrer">
          <FaGithub size={22} className='text-gray-500 hover:text-black' />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/ankitrathore48132/' target="_blank" rel="noopener noreferrer">
          <FaInstagram size={22} className='text-gray-500 hover:text-pink-500' />
        </a>
      </li>
    </ul>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    console.log("Form Data Submitted:", formData);
    toast.success("Message is captured!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="w-full px-6 py-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        <ToastContainer position="top-center" autoClose={3000} />

        {/* Left Info Column */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <div className="h-1 w-20 bg-blue-800 mb-6" />

          <div className="space-y-4 text-base">
            <div className="flex items-center gap-3">
              <MdLocationOn className="text-blue-600 text-xl" />
              <span>Indore, Madhya Pradesh, India</span>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="text-blue-600 text-xl" />
              <span>ankitrathore48132@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MdPhone className="text-blue-600 text-xl" />
              <span>+91-9343770661</span> {/* Replace with actual number */}
            </div>
          </div>

          <h3 className="mt-8 text-xl font-semibold">Follow Me</h3>
          <SocialIcons />
        </div>

        {/* Right Form Column */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Send a Message</h2>
          <div className="h-1 w-20 bg-blue-800 mb-6" />

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-md border w-full">
                <MdPerson className="text-xl text-blue-500" />
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-md border w-full">
                <MdEmail className="text-xl text-blue-500" />
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-start gap-2 bg-white dark:bg-gray-800 p-3 rounded-md border">
              <MdMessage className="text-xl text-blue-500 mt-1" />
              <textarea
                name="message"
                rows="5"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-fit px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
