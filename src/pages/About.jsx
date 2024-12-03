import React from "react";
import visa from "../assets/choose/superior.png";
import argImg from "../assets/choose/high.png";
import nursingImg from "../assets/choose/ieltstoef.png";
import japan from "../assets/choose/japan.jpg";
import period from "../assets/choose/period.jpg";
import time from "../assets/choose/time.jpg";
import university from "../assets/choose/university.jpg";
import working from "../assets/choose/working.jpg";
import director from "../assets/director.jpg";
import maniram from "../assets/maniram.jpg";

const About = () => {
  return (
    <div className="bg-gray-100">
      <div className="py-10 bg-yellow-100">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold py-4">About Us</h1>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="py-10">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Welcome to Fairmont Education Consultancy
            </h2>
            <p className="text-lg md:text-xl leading-relaxed px-4 md:px-0">
              Fairmont Education Consultancy is a well-recognized and genuine
              educational consultancy dedicated to guiding ambitious students in
              fulfilling their educational and career goals in Japan. With over
              10 years of experience, professional N3 passed language
              instructors, and a Japanese system-based teaching approach, we
              offer personalized guidance from university selection to
              post-arrival support in Japan. We are committed to providing
              honest and accurate information to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { img: visa, text: "Visa Processing" },
              { img: nursingImg, text: "Working Visa in Nursing" },
              { img: argImg, text: "Working Visa in Agriculture" },
              { img: university, text: "University Selection" },
              { img: time, text: "Time Management" },
              { img: working, text: "Working Visa" },
              { img: period, text: "Period Management" },
              { img: japan, text: "Living in Japan" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={item.img}
                  alt={item.text}
                  className="h-36 w-36 object-cover rounded-full"
                />
                <div className="pt-4 text-center font-medium text-lg">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-10">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the Team
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                img: maniram,
                name: "Mr. Mani Ram Puri",
                role: "Language Teacher and Senior Counselor (JLPT N2 Level Holder)",
              },
              {
                img: director,
                name: "Mr. Khem Raj Giri",
                role: "Managing Director",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-auto max-w-full rounded-lg"
                />
                <p className="pt-4 text-center font-medium text-xl">
                  {member.name}
                </p>
                <p className="pt-2 text-center text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
