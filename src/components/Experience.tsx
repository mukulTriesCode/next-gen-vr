import React from "react";
import headsetImg from "../assets/vr_image.png";
import Button from "./Button";

const Experience: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="text-white py-[90px] max-w-[1100px] mx-auto flex gap-[77px]">
          <div className="order-2">
            <div className="max-w-[351px] aspect-[351/387] rounded-[50px] p-1 btn-primary overflow-hidden relative">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 max-w-[343px] max-h-[379px] overflow-hidden rounded-[46px] pointer-events-none">
                <img
                  className="w-full h-auto object-cover"
                  src={headsetImg}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="ps-[60px] max-w-[671px] flex flex-col justify-center">
            <h2 className="text-[60px] leading-[60px] font-semibold">
              <span className="gradient-text">Embrace the Real World:</span>{" "}
              Experience and Enjoy it
            </h2>
            <p>
              Step away from the screen and immerse yourself in real
              experiences. From meaningful connections to the beauty of everyday
              life, the world around you has so much to offer. Open your mind,
              explore new places, and live fully in the moment.
            </p>
            <Button className="btn-primary w-fit">Explore More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
