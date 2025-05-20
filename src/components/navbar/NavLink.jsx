const NavLink = ({ icons, name }) => {
  return (
    <div className=" flex items-center gap-1">
      <span className=" text-black/70">{icons}</span>
      <span className="text-sm text-black/70">{name}</span>
    </div>
  );
};

export default NavLink;
