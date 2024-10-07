import { useState } from 'react';
import axios from 'axios'; // Assuming you use axios for API requests

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      // Replace with your API endpoint
      const response = await axios.post('http://localhost:5000/contact', formData);
      console.log('Form data submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div id="contact" className="w-full h-[calc(100vh-4rem)] flex items-center justify-center bg-[#2C3E50] py-12">
      {/* Outer Container */}
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full h-[calc(100%-4rem)]">
        {/* Left Side: Contact Info */}
        <div className="bg-[#34495E] text-white p-8 w-1/3 rounded-l-lg">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414V8h-2V6.586a1 1 0 011.707-.707l1.414 1.414a1 1 0 01-1.414 1.414L11 8.414zm-1.707.707l1.414-1.414a1 1 0 00-1.414 1.414L8 8.414A1 1 0 008 9.828V12h2v-2.414a1 1 0 00-.293-.707z"
                  clipRule="evenodd"
                />
              </svg>
              <p>jl. Sanggar Kencana XXV no.11a-23</p>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.5 3A1.5 1.5 0 001 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0115 5.293V4.5A1.5 1.5 0 0013.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 01-1.956 0L1 6.954V11.5A1.5 1.5 0 002.5 13h11a1.5 1.5 0 001.5-1.5V6.954Z" />
              </svg>
              <p>eranadinep@gmail.com</p>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 8a8 8 0 1016 0A8 8 0 002 8zm4.293 2.707a1 1 0 011.414 0L10 9.414l2.293 2.293a1 1 0 001.414-1.414l-2.5-2.5a1 1 0 00-1.414 0l-2.5 2.5a1 1 0 010 1.414z" />
              </svg>
              <p>+62 812 2197 2695</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-8 w-2/3 rounded-r-lg">
          <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">Get in Touch</h2>
          <p className="text-sm text-gray-600 mb-6">Feel free to drop us a line below!</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="input input-bordered w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#3B5998]"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="input input-bordered w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#3B5998]"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleInputChange}
                className="textarea textarea-bordered w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#3B5998]"
                rows={5}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn w-full bg-[#3B5998] text-white py-2 px-4 rounded-md hover:bg-[#2C3E50]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
