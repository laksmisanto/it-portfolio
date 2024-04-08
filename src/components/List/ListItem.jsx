import React from "react";

const ListItem = ({ children, className, href }) => {
  return (
    <li className={`${className}`}>
      <a href={href}>{children}</a>
    </li>
  );
};

export default ListItem;
