import React from "react";
import { Carousel } from "./";

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] bg-purple-500 m-auto">
        Test
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
