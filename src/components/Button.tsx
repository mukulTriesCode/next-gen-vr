import React from "react";
import { Link } from "react-router";

interface ButtonProps {
  type: string;
  href?: string;
  children: String;
}

const Button: React.FC<ButtonProps> = ({ type, href, children }) => {
  if (href) {
    return (
      <Link className={`btn ${type}`} to={href}>
        {children}
      </Link>
    );
  } else {
    return <button className={`btn ${type}`}>{children}</button>;
  }
};

export default Button;
