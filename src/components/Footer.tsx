import React from "react";
import { Link } from "react-router";
import gplay from "../assets/google_play.png";
import appStore from "../assets/app_store.png";
import discord from "../assets/Vector.svg";
import twitter from "../assets/Group.svg";
import telegram from "../assets/Vector (1).svg";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="text-white py-[90px] max-w-[1100px] mx-auto">
          <div className="w-full mb-16">
            <ul
              data-aos-duration="2200"
              data-aos="fade-down"
              className="flex justify-around w-full [&_li]:text-[28px] mb-[90px]"
            >
              <li className="cursor-pointer hover:underline">About Us</li>
              <li className="cursor-pointer hover:underline">Services</li>
              <li className="cursor-pointer hover:underline">Contact</li>
              <li className="cursor-pointer hover:underline">Products</li>
            </ul>
            <div
              data-aos-duration="2200"
              data-aos="fade-up"
              className="max-w-[620px] mx-auto text-center"
            >
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
                    <img src={gplay} alt="" />
                  </Link>
                </div>
                <div className="max-w-[200px] w-full h-[60px] overflow-hidden">
                  <Link to={"/"} className="">
                    <img src={appStore} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div data-aos-duration="2200" data-aos="fade-up">
            <div className="w-full border border-white mb-4"></div>
            <div className="flex justify-between">
              <div className="">
                <ul className="flex gap-10">
                  <li>
                    <Link className="hover:underline underline-offset-2" to={"/"}>Terms</Link>
                  </li>
                  <li>
                    <Link className="hover:underline underline-offset-2" to={"/"}>Privacy</Link>
                  </li>
                  <li>
                    <Link className="hover:underline underline-offset-2" to={"/"}>Conditions</Link>
                  </li>
                </ul>
              </div>
              <div className="">@2024 VR HEADSET LTD. All Right Reserved</div>
              <div className="flex justify-center items-center">
                <ul className="flex justify-center items-center gap-12">
                  <li className="max-w-4">
                    <Link className="hover:opacity-60 transition" to={"/"}>
                      <img src={discord} alt="" />
                    </Link>
                  </li>
                  <li className="max-w-4">
                    <Link className="hover:opacity-60 transition" to={"/"}>
                      <img src={twitter} alt="" />
                    </Link>
                  </li>
                  <li className="max-w-4">
                    <Link className="hover:opacity-60 transition" to={"/"}>
                      <img src={telegram} alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
