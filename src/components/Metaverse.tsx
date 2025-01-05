import React from "react";
import gateway1 from "../assets/gateway1.jpg";
import gateway2 from "../assets/gateway2.jpg";
import gateway3 from "../assets/gateway3.jpg";
import Button from "./Button";

const Metaverse: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="text-white py-[90px] max-w-[1100px] mx-auto grid grid-cols-2">
          <div className="flex items-center justify-center gap-7">
            <div className="flex-shrink-0">
              <div className="max-w-[331px] aspect-[331/365] rounded-[50px] p-1 btn-primary overflow-hidden relative">
                <div className="h-full max-w-[323px] max-h-[357px] overflow-hidden rounded-[46px] pointer-events-none">
                  <img
                    className="w-full h-auto object-cover"
                    src={gateway1}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-9">
              <div className="max-w-[187px] aspect-[187/207] rounded-[40px] p-1 btn-primary overflow-hidden relative">
                <div className="h-full max-w-[179px] max-h-[199px] overflow-hidden rounded-[35px] pointer-events-none object-cover">
                  <img
                    className="w-full h-full object-cover"
                    src={gateway2}
                    alt=""
                  />
                </div>
              </div>
              <div className="max-w-[187px] aspect-[187/207] rounded-[40px] p-1 btn-primary overflow-hidden relative">
                <div className="h-full max-w-[179px] max-h-[199px] overflow-hidden rounded-[35px] pointer-events-none">
                  <img
                    className="w-full h-full object-cover"
                    src={gateway3}
                    alt=""
                  />
                </div>
              </div>
            </div>
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
