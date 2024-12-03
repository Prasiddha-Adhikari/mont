import React from "react";

const Apply = () => {
  return (
    <div>
      <div className="py-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Apply Online</h1>
        </div>
      </div>
      <section id="contact" className="container mx-auto px-4 py-12 flex justify-center">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-semibold text-gray-700">Interested in Studying Abroad?</h3>
            <p className="text-gray-500">Fill in your details and we'll call you back!</p>
          </div>
          <form className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-gray-700 font-semibold mb-2">
                Mobile
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Mobile"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="education" className="block text-gray-700 font-semibold mb-2">
                Education Level
              </label>
              <input
                type="text"
                id="education"
                name="education"
                placeholder="Education Level"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="course" className="block text-gray-700 font-semibold mb-2">
                Course
              </label>
              <input
                type="text"
                id="course"
                name="course"
                placeholder="Course"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="5"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Apply;
