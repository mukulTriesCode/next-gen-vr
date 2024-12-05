import React from "react";
import bgImage from "../assets/section_1.png";
import rectImg from "../assets/rect_1.png";
import vrImg from "../assets/vr_image.png";
import headsetImg from "../assets/headset.png";
import Navbar from "./Navbar";
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <section>
      <div className="relative text-white">
        <div className="container">
          <div className="p-5">
            <div className="relative rounded-t-3xl h-[880px]">
              <div className="absolute -z-40">
                <img src={bgImage} alt="" />
                <div className="absolute top-0 w-full">
                  <img className="mx-auto" src={rectImg} alt="" />
                  <img
                    className="absolute -top-4 left-1/2 -translate-x-1/2 max-w-[144px]"
                    src={headsetImg}
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                <Navbar />
                <div className="pt-[56px] grid grid-cols-2 z-0">
                  <div className="flex flex-col justify-center items-center -translate-y-20">
                    <div className="max-w-[452px]">
                      <h1 className="text-[96px] leading-[96px] font-bold">
                        Next-Gen
                      </h1>
                      <h2 className="gradient-text text-[64px] leading-[64px] font-semibold">
                        Virtual Worlds
                      </h2>
                      <p>
                        Introduce the latest in VR technology, highlighting how
                        these gadgets push the boundaries of immersive
                        experiences, gaming, and more.
                      </p>
                      <Button className="btn-primary">Explore More</Button>
                    </div>
                  </div>
                  <div className="">
                    <img src={vrImg} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gradient absolute -bottom-7 h-[170px] w-full"></div>
      </div>
    </section>
  );
};

export default Hero;
