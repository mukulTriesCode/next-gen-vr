import React from "react";
import Button from "./Button";
import headsetImg from "../assets/vr_image.png";

const Gallery: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="text-white py-[90px] max-w-[1100px] mx-auto">
          <div className="flex flex-col justify-center mb-20">
            <h2 className="text-[60px] leading-[60px] font-semibold text-center">
              <span className="gradient-text">Our Next gen</span> Vr Store
            </h2>
          </div>
          <div className="flex gap-[93px] justify-between items-center">
            <div className="flex flex-col items-center gap-9 group">
              <div className="relative">
                <div className="max-w-[280px] aspect-[14/15] rounded-[50px] p-1 btn-primary overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 max-w-[272px] max-h-[292px] overflow-hidden rounded-[46px] pointer-events-none">
                    <img className="w-full h-auto object-cover" src={headsetImg} alt="" />
                  </div>
                </div>
              </div>
              <h4>Gear VR headset</h4>
              <Button className="btn-primary w-fit">Buy now</Button>
            </div>
            <div className="flex flex-col items-center gap-9 group">
              <div className="relative">
                <div className="max-w-[350px] aspect-[7/8] rounded-[50px] p-1 btn-primary overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 max-w-[342px] max-h-[392px] overflow-hidden rounded-[46px] pointer-events-none">
                    <img className="w-full aspect-[7/8] object-cover" src={headsetImg} alt="" />
                  </div>
                </div>
              </div>
              <h4>Smart VR headset</h4>
              <Button className="btn-primary w-fit">Buy now</Button>
            </div>
            <div className="flex flex-col items-center gap-9 group">
              <div className="relative">
                <div className="max-w-[280px] aspect-[14/15] rounded-[50px] p-1 btn-primary overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 max-w-[272px] max-h-[292px] overflow-hidden rounded-[46px] pointer-events-none">
                    <img className="w-full h-auto object-cover" src={headsetImg} alt="" />
                  </div>
                </div>
              </div>
              <h4>Play Station VR</h4>
              <Button className="btn-primary w-fit">Buy now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
