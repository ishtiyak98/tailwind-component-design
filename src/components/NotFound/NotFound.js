import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../images/404_error.png";

const NotFound = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="font-mono grid justify-items-center content-center h-screen items-center grid-cols-1 text-center lg:grid-cols-2 lg:text-left xl:grid-cols-2 ">
        <div className="px-5">
          <img
            className="max-w-[320px] sm:max-w-[450px] lg:max-w-[550px]"
            src={errorImg}
            alt="404_error"
          />
        </div>
        <div className="px-5 lg:px-16">
          <h1 className="text-6xl font-bold lg:text-8xl text-gray-800">404</h1>
          <div className="space-y-0.5">
            <h3 className="text-2xl font-bold lg:text-4xl text-gray-800">
              PAGE NOT FOUND
            </h3>
            <h3 className="text-2xl font-bold lg:text-4xl text-gray-800">
              OOPS! THAT PAGE DOESN'T EXIST!
            </h3>
            <div className="py-5">
              <Link
                to={"/home"}
                className="px-5 py-3 text-xl font-bold text-white bg-gray-800 rounded-lg hover:bg-red-500"
              >
                RETURN TO THE WEBSITE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
