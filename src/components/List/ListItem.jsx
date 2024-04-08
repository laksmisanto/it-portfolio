import React from "react";
import Link from "next/link";

const ListItem = ({ children, className, href }) => {
  return (
    <li className={`${className}`}>
      <Link href={href} replace={false}>
        {children}
      </Link>
    </li>
  );
};

export default ListItem;
