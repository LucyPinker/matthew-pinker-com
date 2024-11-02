"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [flashMessage, setFlashMessage] = useState(null);
  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }
    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFlashMessage({ type: "error", text: "Please correct the errors." });
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "eeb8f613-9219-4800-b406-55862fb759ef",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setFlashMessage({ type: "success", text: "Form submitted successfully!" });
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setFlashMessage({ type: "error", text: "Form submission failed. Please try again." });
    }
  }

  return (
    <div className="max-w-lg mx-auto p-8 bg-white bg-opacity-40 rounded-md shadow-lg">
      {flashMessage && (
        <div
          className={`p-4 mb-4 text-sm font-medium rounded ${flashMessage.type === "success" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
            }`}
        >
          {flashMessage.text}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-black">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            className="mt-1 block w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black font-sans"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="email@example.com"
            className="mt-1 block w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black font-sans"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-black">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows="6"
            placeholder="Enter Message"
            className="mt-1 block w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black font-sans"
          ></textarea>
          {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-gray-300 text-black font-bold py-3 rounded transition hover:bg-gray-400"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}
