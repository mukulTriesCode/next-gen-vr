import React from "react";
import { Link } from "react-router";

interface ButtonProps {
  className: string;
  href?: string;
  children: String;
}

const Button: React.FC<ButtonProps> = ({ className, href, children }) => {
  if (href) {
    return (
      <Link className={`btn ${className}`} to={href}>
        {children}
      </Link>
    );
  } else {
    return <button className={`btn ${className}`}>{children}</button>;
  }
};

export default Button;
