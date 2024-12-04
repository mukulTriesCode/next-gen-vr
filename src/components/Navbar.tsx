import React from "react";

const Navbar: React.FC = () => {
  const navItems = ["Home", "Products", "", "Services", "Contact"];
  return (
    <div className="">
      <div className="flex justify-center items-center py-6">
        {navItems.map((item, index) => (
          <div key={index} className="min-w-[180px] text-center uppercase">
            <a href="/">
              {item}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
