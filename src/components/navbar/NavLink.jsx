import { Link } from "react-router-dom";

const NavLink = ({ icons, name }) => {
  return (
    <Link
      to={name.toLowerCase() === "home" ? "/" : name.toLowerCase()}
      className=" flex items-center gap-1"
    >
      <span className=" text-black/70">{icons}</span>
      <span className="text-sm text-black/70">{name}</span>
    </Link>
  );
};

export default NavLink;
