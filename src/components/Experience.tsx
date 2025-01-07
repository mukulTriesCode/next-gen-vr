import React from "react";
import experience from "../assets/amazed.png";
import Button from "./Button";

const Experience: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="text-white py-[90px] max-w-[1100px] mx-auto flex gap-[77px]">
          <div data-aos="fade-left" className="order-2">
            <div className="h-full max-w-[351px] aspect-[351/387] rounded-[50px] p-1 btn-primary overflow-visible relative">
              <div className="h-full bg-[#100425] max-w-[343px] rounded-[46px] pointer-events-none overflow-visible relative">
                <img
                  className="absolute bottom-0 right-0 object-cover scale-110 -translate-y-[5%] -translate-x-[5%]"
                  src={experience}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div data-aos="fade-right" className="ps-[60px] max-w-[671px] flex flex-col justify-center">
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
