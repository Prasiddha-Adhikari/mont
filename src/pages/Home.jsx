import React from "react";
import Location from "../components/Location/Location";
import Testimonial from "../components/Testimonial/Testimonial";
import VideoCarousel from "../components/Slide/VideoCarousel";
import director from "../assets/director.jpg";
import student from "../assets/stvisa.png";
import nurse from "../assets/nursing.jpeg";
import arg from "../assets/arg.jpeg";
import food from "../assets/foodservice.jpeg";
import visa from "../assets/choose/superior.png";
import argImg from "../assets/choose/high.png";
import nursingImg from "../assets/choose/ieltstoef.png";
import japan from "../assets/choose/japan.jpg";
import period from "../assets/choose/period.jpg";
import time from "../assets/choose/time.jpg";
import university from "../assets/choose/university.jpg";
import working from "../assets/choose/working.jpg";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="h-[400px] md:h-[700px] relative">
        <div className="absolute inset-0">
          <VideoCarousel />
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-5xl font-bold">FairMont Education Consultancy</h2>
            <p className="text-red-600">Best Education Consultancy in Nepal</p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Fair Mont Education Consultancy is a well-recognized and genuine educational consultancy established to 
              encourage ambitious students to fulfill their educational and career objectives in Japan. With over 10 years 
              of experience in Japan, professional Japanese language instructors, and direct university selection, we ensure 
              our students receive honest and accurate information and support.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-medium">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              { img: student, text: "Student Visa" },
              { img: nurse, text: "Working Visa In Nursing" },
              { img: arg, text: "Working Visa In Agriculture" },
              { img: food, text: "Working Visa In Food Service" }
            ].map((service, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={service.img} alt={service.text} className="rounded-full h-24 w-24 md:h-36 md:w-36 object-cover" />
                <div className="text-center mt-2">{service.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 md:pr-8">
              <img src={director} alt="Director" className="rounded-lg shadow-lg max-w-full h-auto" />
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
              <h2 className="text-2xl md:text-3xl font-bold">Welcome to Fair Mont Education Consultancy</h2>
              <h3 className="text-lg text-gray-600">CEO: Mr. Khem Raj Giri</h3>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Studying abroad offers tremendous opportunities for personal growth and success. At Fair Mont Education Consultancy, 
                we prepare students to excel through tailored educational pathways, personalized support, and our extensive experience 
                in the Japanese education system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold pb-6">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: visa, text: "Visa Processing" },
              { img: nursingImg, text: "Working Visa in Nursing" },
              { img: argImg, text: "Working Visa in Agriculture" },
              { img: university, text: "University Selection" },
              { img: time, text: "Time Management" },
              { img: working, text: "Working Visa" },
              { img: period, text: "Period Management" },
              { img: japan, text: "Living in Japan" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={item.img} alt={item.text} className="rounded-full h-36 w-36 object-cover" />
                <div className="pt-4 text-center font-medium text-lg">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <Location />

      {/* Testimonial Section */}
      <Testimonial />
    </div>
  );
};

export default Home;
