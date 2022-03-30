import React from "react";
import { Link } from "react-router-dom";
import thumbError from "../../images/thumb/error_page.png";
import comingSoon from "../../images/coming_soon.JPG";

const HomePage = () => {
  return (
    <div className="font-mono px-28">
      <div className="my-12">
        <h1 className="text-center text-4xl font-semibold text-slate-700">
          All My Component Page Design
        </h1>
      </div>

      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
        <Link to={"/error-page"}>
          <div className="shadow-md rounded-lg p-4 bg-slate-100 transition ease-in duration-150 hover:scale-105">
            <div className="h-[180px]">
              <img className="rounded-lg h-full w-full" src={thumbError} alt="" />
            </div>
            <div className="mt-4 text-center">
              <h1 className="text-2xl font-semibold text-slate-700">
                Error Page Design
              </h1>
            </div>
          </div>
        </Link>

        <Link to={"/"}>
          <div className="shadow-md rounded-lg p-4 bg-slate-100 transition ease-in duration-150 hover:scale-105">
            <div className="h-[180px]">
              <img className="rounded-lg h-full w-full" src={comingSoon} alt="" />
            </div>
            <div className="mt-4 text-center">
              <h1 className="text-2xl font-semibold text-slate-700">
                Responsive Navbar
              </h1>
            </div>
          </div>
        </Link>

        <Link to={"/"}>
          <div className="shadow-md rounded-lg p-4 bg-slate-100 transition ease-in duration-150 hover:scale-105">
            <div className="h-[180px]">
              <img className="rounded-lg h-full w-full" src={comingSoon} alt="" />
            </div>
            <div className="mt-4 text-center">
              <h1 className="text-2xl font-semibold text-slate-700">
                Card Design
              </h1>
            </div>
          </div>
        </Link>

        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;