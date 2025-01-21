 import React, { useState } from "react";
import emailjs from "emailjs-com"; 

function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_irbnq0m", 
        "template_5ku19rg", 
        e.target,
        "EJN7BO6HAXlYqA7Cc" 
      )
      .then(() => {
        setStatus("Message sent successfully!");
        e.target.reset(); 
      })
      .catch(() => setStatus("Failed to send message. Please try again."));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-[#141414]  rounded shadow">
      <h2 className="text-md @[600px]:text-2xl font-bold mb-4">Wanna send him a message?</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-[#141414] w-full p-[2px] @[600px]:p-2 border rounded"
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
            name="email" 
            className="bg-[#141414] w-full p-[2px] @[600px]:p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message" 
            className="bg-[#141414] w-full p-[2px] @[600px]:p-2 border rounded"
            rows="3"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-[#2C2C2C] text-white rounded-[8px]">
          Send
        </button>
      </form>
      {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
    </div>
  );
}

export default ContactForm;
