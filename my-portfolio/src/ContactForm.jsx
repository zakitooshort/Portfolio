 import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_irbnq0m", // Replace with your EmailJS service ID
        "template_5ku19rg", // Replace with your EmailJS template ID
        e.target,
        "EJN7BO6HAXlYqA7Cc" // Replace with your EmailJS user ID
      )
      .then(() => {
        setStatus("Message sent successfully!");
        e.target.reset(); // Reset the form
      })
      .catch(() => setStatus("Failed to send message. Please try again."));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-[#141414]  rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Wanna send him a message?</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name" // Important: This must match your EmailJS template fields
            className="bg-[#141414] w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email" // Important: This must match your EmailJS template fields
            className="bg-[#141414] w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message" // Important: This must match your EmailJS template fields
            className="bg-[#141414] w-full p-2 border rounded"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-[#2C2C2C] text-white rounded-[10px]">
          Send
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
    </div>
  );
}

export default ContactForm;
