import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Just log the form data
    console.log("Form Data Submitted:", formData);
    toast.success("Message is captured!");

    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="w-full px-6 py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <ToastContainer position="top-center" autoClose={3000} />
        <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
        <div className="h-1 w-20 bg-blue-800 mx-auto mb-8" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-white dark:bg-gray-800 border"
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 rounded-md bg-white dark:bg-gray-800 border"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md bg-white dark:bg-gray-800 border"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
