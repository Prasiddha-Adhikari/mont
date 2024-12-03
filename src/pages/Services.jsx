import React from "react";
import service from "../assets/services.png";
import service2 from "../assets/service2.png";

const Services = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      </div>

      <div className="container mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Service 1 */}
          <div className="p-6">
            <img src={service} alt="Student Visa" className="w-full h-auto mb-6" />
            <h2 className="text-2xl font-semibold mb-4">Student Visa</h2>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Service 2 */}
          <div className="p-6">
            <img src={service2} alt="Working Visa" className="w-full h-auto mb-6" />
            <h2 className="text-2xl font-semibold mb-4">Working Visa</h2>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Additional Working Visa */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Different Working Visas</h2>
          <ul className="list-disc list-inside">
            <li>Nursing</li>
            <li>Agriculture</li>
            <li>Food Service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
