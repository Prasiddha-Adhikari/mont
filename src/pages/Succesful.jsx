import React from "react";
import blog1 from "../assets/blog1.jpg"

const Succesful = () => {
  return (
    <div>
      <div className="py-10 bg-yellow-100">
        <div className="container">
          <h1 className="pl-2 text-3xl font-bold">Succesful Story</h1>
        </div>
      </div>
        <div className="container pt-4">
          <img src={blog1} alt="" className="rounded-lg w-[300px] h-[200px]"/>
        </div>
    </div>
  );
};

export default Succesful;
