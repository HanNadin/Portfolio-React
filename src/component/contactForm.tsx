import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  // Handle form input changes
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/contact", formData);
      if (response.data.success) {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatusMessage("Failed to send message. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div id="contact"className="w-full h-[calc(100vh-4rem)] flex items-center justify-center bg-[#2C3E50] py-12">
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full h-[calc(100%-4rem)]">
        {/* Left Side: Contact Info */}
        <div className="bg-[#34495E] text-white p-8 w-1/3 rounded-l-lg">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="space-y-4">
            <p>Jl. Sanggar Kencana XXV no.11a-23</p>
            <p>eranadinep@gmail.com</p>
            <p>+62 812 2197 2695</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-8 w-2/3 rounded-r-lg">
          <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">Get in Touch</h2>
          <p className="text-sm text-gray-600 mb-6">Feel free to drop us a line below!</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered w-full p-3 border border-gray-300 rounded-md"
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn w-full bg-[#3B5998] text-white py-2 px-4 rounded-md hover:bg-[#2C3E50]"
            >
              Send
            </button>
          </form>
          {statusMessage && <p className="mt-4 text-center text-green-500">{statusMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
