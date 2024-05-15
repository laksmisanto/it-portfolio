import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ children, className, href }) => {
  return (
    <li className={`${className}`}>
      <Link to={href} replace={false}>
        {children}
      </Link>
    </li>
  );
};

export default ListItem;
