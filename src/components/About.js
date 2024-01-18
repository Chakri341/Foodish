import React from "react";

const About = () => {
  return (
    <div className="m-3">
      <h1 className="font-bold  text-3xl p-2">About this Project</h1>
      
      <div className="p-2 m-2 text-lg">

      <p className="p-2">
        • Developed a Swiggy clone utilizing live Swiggy API for real-time
        restaurant data.
      </p>
      <p  className="p-2">
        • Developed a dynamic search functionality, allowing users to easily
        search and filter restaurants.
      </p>
      <p  className="p-2">
        • Utilized Tailwind CSS for responsive and visually appealing UI
        components, enhancing the overall user experience.
      </p>
      <p  className="p-2">
        • Integrated Redux Toolkit for efficient state management, facilitating
        the handling of the shopping cart and ensuring a seamless user journey
      </p>
      </div>
    </div>
  );
};

export default About;
