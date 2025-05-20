import { AlignJustify, LogOut, Plus, Search, User, X } from "lucide-react";
import { useRef, useState } from "react";
import Sidebar from "./Sidebar";
import { animateSidebarClose, useSidebarMoveRight } from "../../hooks/gsap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // gsap animaion
  const sidebarRef = useRef(null);
  useSidebarMoveRight(sidebarRef, showSidebar);

  const handleClose = () => {
    animateSidebarClose(sidebarRef, () => setShowSidebar(false));
  };

  console.log(showSidebar);

  const handleForm = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <nav className=" navbar relative">
      <div className="w-screen px-1 border-b border-gray-50 shadow ">
        <div className="flex justify-between items-center gap-4 h-12 py-2">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span
              onClick={() => setShowSidebar(!showSidebar)}
              className="font-bold "
            >
              <AlignJustify size={18} strokeWidth={2.2} />
            </span>
            <Link to="/" className="uppercase font-semibold">
              <span className="text-violet-600 font-bold text-2xl">G</span>blog
            </Link>
          </div>

          {/* Search Form */}
          <form
            onSubmit={handleForm}
            className="w-6/12 flex items-center py-[2px] px-2 pb-1 rounded-4xl bg-gray-100 md:w-2/5 lg:w-3/12"
          >
            <input
              type="text"
              className=" w-full focus:outline-none text-md"
              placeholder="Search..."
            />
            <span className=" px-1">
              <Search strokeWidth={1.5} size={16} />
            </span>
          </form>

          {/* Right Controls */}
          <span onClick={() => setShowProfile(!showProfile)}>
            <img
              src="/images/default-profile-icon.png"
              alt="User icon"
              className="size-6 cursor-pointer"
            />
          </span>
        </div>
      </div>

      {/* sidebar */}
      {showSidebar && (
        <div
          ref={sidebarRef}
          className=" sidebar absolute top-0 left-0 bg-white w-2/3 z-30 shadow flex flex-col gap-1"
        >
          {/* logo */}
          <div className=" flex justify-between items-center">
            <h2 className="uppercase font-semibold px-2 bg-gray-50 py-2">
              <span className="text-violet-600 font-bold text-2xl">G</span>blog
            </h2>
            <span onClick={handleClose} className="pr-2">
              <X size={16} />
            </span>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      )}

      {/* profile */}
      {showProfile && (
        <div className="absolute right-0  w-44 bg-white border border-gray-200 rounded-xl shadow-xl z-50 text-sm">
          {/* Header */}
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="font-semibold text-gray-800">anas</p>
            <p className="text-gray-500 text-xs truncate">anas@gmail.com</p>
          </div>

          {/* Menu Items */}
          <ul className="py-1 divide-y divide-gray-100">
            <li>
              <Link
                to="/profile"
                onClick={() => setShowProfile(false)}
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition text-gray-700 cursor-pointer"
              >
                <User size={16} /> <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link
                to="create-blog"
                onClick={() => setShowProfile(false)}
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition text-gray-700 cursor-pointer"
              >
                <Plus size={16} /> <span>Create Blog</span>
              </Link>
            </li>
            <li>
              <Link className="w-full flex items-center gap-2 px-4 py-2 hover:bg-red-50 transition text-red-600 cursor-pointer">
                <LogOut size={16} /> <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
