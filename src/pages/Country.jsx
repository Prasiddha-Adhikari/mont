import React from "react";
import country from "../assets/country.png";

const Country = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <img src={country} alt="Country Image" className="mx-auto mb-8" />
        <h1 className="text-3xl font-bold mb-8">About Japan</h1>
      </div>
      
      <div className="py-4">
        <p className="text-lg leading-relaxed">
          Did you know that Australia is the 6th biggest country in the world by land mass but is ranked 55 in terms of population with an approximate count of 25 million people? Modern Australia evolved to what it is today only after 1901 when 6 colonies federated to form the Commonwealth of Australia. Today, millions of people aspire to move to Australia for education, employment, or to migrate.
        </p>
        <p className="mt-4">
          Some of the top most livable cities in the world are in Australia and so are some of the most highly ranked universities known for their research contributions. Australia has become one of the most preferred destinations for international students, offering superior standard education, high-quality lifestyle, provisions for international students to work part-time, post-study work options for Australian degree holders, and the option to bring dependent partners (spouses) during study.
        </p>
      </div>

      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4">Interesting Facts About Japan</h2>
        <ul className="list-disc list-inside">
          <li>6th Largest country in the world.</li>
          <li>Population about 25.5 million, less than Nepal’s population.</li>
          <li>Australia ranks among the top 3 for the highest human development index.</li>
        </ul>
      </div>

      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4">Why Study in Japan?</h2>
        <p className="text-lg leading-relaxed">
          There are many reasons to study in Japan. Some are attracted by Japan's high standard of education, while others are drawn to the country's rich cultural heritage. Japan is one of the most popular destinations for international students, with nearly 5 million students studying abroad each year, a number expected to increase in the future.
        </p>
      </div>

      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4">Explore the World and Grow as a Person</h2>
        <p className="text-lg leading-relaxed">
          Studying abroad provides an unparalleled opportunity to live, work, and explore different cultures. You will learn about Japan’s people, culture, history, and language, contributing to personal growth, independence, and a broader perspective on global similarities and differences.
        </p>
      </div>

      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4">Excellent Educational Standards</h2>
        <p className="text-lg leading-relaxed">
          Japan ranks high in education, with Japanese high school students ranking first globally in mathematics and second in scientific literacy. The country boasts a significant number of Nobel Prize winners and is home to over 700 universities, with 10 ranked in the top 200 globally.
        </p>
      </div>

      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4">Learn Japanese while Earning a Japanese High-School Diploma</h2>
        <p className="text-lg leading-relaxed">
          International students studying in Japan can pursue a Japanese high-school diploma alongside the International Baccalaureate, offering a dual educational experience that blends Japanese language proficiency with an internationally recognized curriculum. This advantage is particularly beneficial for students planning to study or work in Japan post-graduation.
        </p>
      </div>

      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4">Study in a Safe and Peaceful Environment</h2>
        <p className="text-lg leading-relaxed">
          Japan is renowned for its safety, with low crime rates and advanced infrastructure designed to withstand natural disasters. Tokyo and Osaka consistently rank among the world's safest cities. Additionally, Japan offers a high-quality healthcare system and promotes a healthy lifestyle, contributing to its high life expectancy.
        </p>
      </div>

      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4">Rich Cultural Heritage and Traditional Experiences</h2>
        <p className="text-lg leading-relaxed">
          Japan's rich cultural heritage is showcased through diverse cultural experiences, from traditional ceremonies to modern festivals. Cities like Nagoya offer a blend of traditional and contemporary living, featuring historical landmarks, cultural sites, and opportunities to engage in traditional arts like tea ceremonies, calligraphy, and martial arts.
        </p>
      </div>

      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4">Learn Japanese Martial Arts and Cultural Arts</h2>
        <p className="text-lg leading-relaxed">
          Japanese education emphasizes physical and cultural education, offering students opportunities to participate in martial arts like judo and karate, as well as cultural arts such as tea ceremony and calligraphy. These activities promote holistic development and cultural appreciation among students.
        </p>
      </div>

      <div className="py-8">
        <h2 className="text-2xl font-bold mb-4">Admission Requirements</h2>
        <p className="text-lg leading-relaxed">
          - High school graduates or those recognized with equivalent qualifications or higher.
        </p>
      </div>
    </div>
  );
};

export default Country;
