import React from "react";
import Button from "./Button";

const Subscribe: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="text-white py-[90px] max-w-[1100px] mx-auto flex gap-[77px]">
          <div className="rounded-3xl w-full p-1 btn-primary overflow-hidden relative">
            <div className="rounded-3xl bg-purple-300 overflow-hidden py-16">
              <div className="max-w-[760px] mx-auto text-center mb-20">
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
                    className="w-full"
                    type="text"
                    placeholder="enter your email address for update...."
                  />
                  <div className="">
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
    </section>
  );
};

export default Subscribe;
