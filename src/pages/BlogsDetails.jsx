import React from "react";
import { useLocation } from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";

const BlogsDetails = () => {
  const location = useLocation();
  const { image, date, title, description, author } = location.state;

  return (
    <div className="pt-20">
      <div className="h-[200px] md:h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-700 hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
          <p className="text-xs md:text-sm">written by {author} on {date}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <p className="text-slate-600 text-sm pb-4">
          Written by {author} on {date}
        </p>
        <h1 className="text-2xl md:text-4xl font-semibold pb-4">{title}</h1>
        <p className="text-base md:text-lg leading-relaxed">{description}</p>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-xl md:text-2xl font-bold pb-4">More Blogs</h2>
        <BlogsComp />
      </div>
    </div>
  );
};

export default BlogsDetails;
