import React from "react";
import headsetImg from "../assets/vr_image.png";
import Button from "./Button";

const Metaverse: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="text-white py-[90px] max-w-[1100px] mx-auto grid grid-cols-2">
          <div className="">
            <img src={headsetImg} alt="" />
          </div>
          <div className="ps-[60px] flex flex-col justify-center">
            <h2 className="text-[60px] leading-[60px] font-semibold">
              <span className="gradient-text">Your Gateway</span> to the
              Metaverse
            </h2>
            <p>
              Introduce users to the evolving world of the metaverse.how
              cutting-edge VR gadgets serve as the key to unlocking digital
              realms where they can socialize, work, play, and explore new
              experiences in interconnected virtual worlds.
            </p>
            <Button className="btn-primary w-fit">Play Now ▶️</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metaverse;
