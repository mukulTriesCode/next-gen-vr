import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="text-white py-[90px] max-w-[1100px] mx-auto flex gap-[77px]">
          <div className="w-full">
            <ul className="flex justify-around w-full [&_li]:text-[28px]">
              <li className="cursor-pointer hover:underline">About Us</li>
              <li className="cursor-pointer hover:underline">Services</li>
              <li className="cursor-pointer hover:underline">Contact</li>
              <li className="cursor-pointer hover:underline">Products</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
