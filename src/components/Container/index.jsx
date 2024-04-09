import React from "react";

const Container = ({ children, className }) => {
  return <div className={`container px-6 ${className}`}>{children}</div>;
};

export default Container;
