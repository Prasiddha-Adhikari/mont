import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog1.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description: "Lorem ipsum dolor ...", // Your long description here
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 2, // Unique id for each blog post
    image: Img2,
    title: "Top places to visit in US",
    description: "Lorem ipsum dolor ...", // Your long description here
    author: "Someone",
    date: "April 22, 2022",
  },
  {
    id: 3, // Unique id for each blog post
    image: Img3,
    title: "Top places to visit in Japan",
    description: "Lorem ipsum dolor ...", // Your long description here
    author: "Someone",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
