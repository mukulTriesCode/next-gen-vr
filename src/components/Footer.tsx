import React from "react";
import { Link } from "react-router";
import bgImage from "../assets/section_1.png";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="text-white py-[90px] max-w-[1100px] mx-auto">
          <div className="w-full mb-16">
            <ul className="flex justify-around w-full [&_li]:text-[28px] mb-[90px]">
              <li className="cursor-pointer hover:underline">About Us</li>
              <li className="cursor-pointer hover:underline">Services</li>
              <li className="cursor-pointer hover:underline">Contact</li>
              <li className="cursor-pointer hover:underline">Products</li>
            </ul>
            <div className="max-w-[620px] mx-auto text-center">
              <h4 className="text-3xl mb-8">
                <Link className="hover:underline" to={"/"}>
                  Download our App
                </Link>
              </h4>
              <p className="mb-9">
                Discover a world of real experiences at your fingertips.
                Download our app now and start exploring today!
              </p>
              <div className="flex gap-[60px] justify-center">
                <div className="max-w-[200px] w-full h-[60px] overflow-hidden">
                  <Link to={"/"} className="">
                    <img src={bgImage} alt="" />
                  </Link>
                </div>
                <div className="max-w-[200px] w-full h-[60px] overflow-hidden">
                  <Link to={"/"} className="">
                    <img src={bgImage} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border border-white mb-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
