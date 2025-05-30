import React, { useState } from "react";
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
      const response = await fetch(`${process.env.REACT_APP_BASE_URL}/PortfolioData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('Something went wrong!');
      console.error('Error:', error);
    }
  };

  return (
    <section className="w-full px-6 py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <ToastContainer position="top-center" autoClose={3000} />
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact Me</h2>
        <div className="h-1 w-20 bg-blue-800 mx-auto mb-8" />

        <form className="md:col-span-2 space-y-4" onSubmit={handlesubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              required
              className="p-3 rounded-md bg-white dark:bg-gray-800 border"
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your email"
              required
              className="p-3 rounded-md bg-white dark:bg-gray-800 border"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message"
            required
            className="w-full p-3 rounded-md bg-white dark:bg-gray-800 border"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-md bg-blue-300 hover:bg-blue-400 text-black font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
