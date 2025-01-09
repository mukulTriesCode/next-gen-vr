import React from "react";
import Button from "./Button";

const Navbar: React.FC = () => {
  const navItems = ["Home", "Products", "", "Services", "Contact"];
  return (
    <header data-aos-duration="2200" data-aos="fade-down">
      <nav className="flex justify-center items-center py-6">
        {navItems.map((item, index) => (
          <div key={index} className="min-w-[180px] text-center uppercase">
            <Button href="/" className="hover:underline underline-offset-4">
              {item}
            </Button>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
