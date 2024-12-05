import React from "react";
import Button from "./Button";

const Navbar: React.FC = () => {
  const navItems = ["Home", "Products", "", "Services", "Contact"];
  return (
    <div className="">
      <div className="flex justify-center items-center py-6">
        {navItems.map((item, index) => (
          <div key={index} className="min-w-[180px] text-center uppercase">
            <Button href="/" className="">
              {item}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
