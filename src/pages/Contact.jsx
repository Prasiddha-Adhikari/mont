import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100">
      <div className="py-12 bg-yellow-100">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Left Section */}
          <div className="flex-1 md:mr-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="text-lg pb-4">
                Visit our office for free study abroad counseling, visa assistance, and more.
              </p>
              <div className="border-t border-gray-300 pt-4">
                <p className="font-semibold mb-2">Phone:</p>
                <p className="text-gray-700">+977-01-5916120, 9869060120</p>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <p className="font-semibold mb-2">Timing:</p>
                <p className="text-gray-700">Sunday - Friday 8:00 am - 6:30 pm</p>
              </div>
              <div className="border-t border-gray-300 pt-4">
                <p className="font-semibold mb-2">Email:</p>
                <p className="text-gray-700">info.goodvibes@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 md:ml-4">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-center">Interested in studying abroad?</h2>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-gray-700 font-semibold mb-2">Last Name</label>
                    <input type="text" id="last-name" name="last-name" placeholder="Your Last Name"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="block text-gray-700 font-semibold mb-2">Mobile</label>
                    <input type="tel" id="mobile" name="mobile" placeholder="Your Mobile Number"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email Address"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="education" className="block text-gray-700 font-semibold mb-2">Education Level</label>
                    <input type="text" id="education" name="education" placeholder="Your Education Level"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="course" className="block text-gray-700 font-semibold mb-2">Course</label>
                    <input type="text" id="course" name="course" placeholder="Course Interested In"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea id="message" name="message" placeholder="Your Message" rows="5"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
                  </div>
                  <div className="col-span-2">
                    <button type="submit"
                      className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
