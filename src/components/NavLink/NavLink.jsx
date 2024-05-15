import { Link } from "react-router-dom";

const NavLink = ({ children, href }) => {
  return (
    <Link
      to={href}
      replace={false}
      className="font-primaryFont text-lg bg-btnBg text-bgColor border border-btnBg hover:bg-bgColor hover:text-btnBg ease-linear duration-200 px-6 py-3 rounded-lg tracking-wider inline-block mt-6 sm:mt-10"
    >
      {children}
    </Link>
  );
};

export default NavLink;
