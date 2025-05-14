import React, { useState } from "react";
import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons'; // 🔁 make sure this component is present

function Contact() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", {
      name: fname,
      email,
      password,
      message
    });
  };

  return (
    <div className="flex w-full flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-10 rounded-2xl shadow-2xl max-w-lg w-full border border-amber-400"
      >
        <h2 className="text-4xl font-extrabold text-center text-amber-300 mb-4">Get in Touch</h2>
        <p className="text-base text-center text-gray-300 mb-8">Feel free to connect or ask anything!</p>

        <div className="mb-6">
          <label className="block text-gray-400 font-medium mb-2">Full Name</label>
          <input
            type="text"
            className="w-full p-4 border border-amber-300 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-900 transition-all duration-300 hover:shadow-xl"
            placeholder="Enter your full name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-400 font-medium mb-2">Email Address</label>
          <input
            type="email"
            className="w-full p-4 border border-amber-300 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-900 transition-all duration-300 hover:shadow-xl"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-400 font-medium mb-2">Password</label>
          <input
            type="password"
            className="w-full p-4 border border-amber-300 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-900 transition-all duration-300 hover:shadow-xl"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-400 font-medium mb-2">Your Message</label>
          <textarea
            rows={4}
            className="w-full p-4 border border-amber-300 bg-gray-800 text-white rounded-xl resize-none focus:outline-none focus:ring-4 focus:ring-blue-900 transition-all duration-300 hover:shadow-xl"
            placeholder="Write your message..."
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full p-4 mt-4 text-white bg-gray-700 hover:bg-gray-600 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl"
        >
          Send Message ✉️
        </button>

        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/Login" className="text-amber-300 hover:underline">Login</Link>
        </p>
      </form>

      {/* Social Icons */}
      <div className="mt-10 w-full max-w-lg border border-amber-400 rounded-2xl p-6 bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300">
        <h3 className="text-center text-xl font-semibold text-white mb-4">
          Connect with me
        </h3>
        <div className="flex justify-center space-x-6">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}

export default Contact;
