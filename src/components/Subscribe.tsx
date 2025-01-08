import React from "react";
import Button from "./Button";
import bgImage from "../assets/cta_bg.png";

const Subscribe: React.FC = () => {
  return (
    <section>
      <div data-aos-duration="1000" data-aos="fade-up" className="container">
        <div className="text-white py-[90px] max-w-[1100px] mx-auto flex gap-[77px]">
          <div className="rounded-3xl w-full p-1 btn-primary overflow-hidden relative">
            <div className="rounded-3xl overflow-hidden py-16 relative">
              <div className="absolute w-full h-full top-0 -z-0 bg-[#100425]">
                <img src={bgImage} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="max-w-[760px] mx-auto text-center relative z-10">
                <div className="mb-20">
                  <h2 className="text-[60px] leading-[60px] font-semibold mb-8">
                    <span className="gradient-text">Subscribe to get</span>{" "}
                    Updated
                  </h2>
                  <p>
                    Ready to step into a world of real connections and
                    experiences? Start your journey today and embrace the world
                    around you.
                  </p>
                </div>
                <form action="">
                  <div className="relative px-8 flex">
                    <input
                      className="w-full ps-6 pe-[140px] py-7 rounded-[60px] bg-white/20 placeholder:text-white"
                      type="text"
                      placeholder="enter your email address for update...."
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 -translate-x-7">
                      <Button className="z-10 btn-primary w-fit">
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
