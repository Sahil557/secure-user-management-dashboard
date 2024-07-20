import React from "react";
import { RegisterLinksProps } from "./interface";
import { Link } from "react-router-dom";

const RegisterLink: React.FC<RegisterLinksProps> = ({ text, link, linkTo }) => (
  <p className="text-center text-sm leading-5 text-gray-500 max-w">
    {text}{" "}
    <Link to={link} className="text-blue-500 hover:underline">
      {linkTo}
    </Link>
  </p>
);

export default RegisterLink;
