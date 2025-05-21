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
      <div className="w-full border-b border-gray-50 shadow bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 h-14 gap-4">
          {/* Logo & Sidebar Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="md:hidden"
            >
              <AlignJustify size={20} strokeWidth={2.2} />
            </button>
            <Link to="/" className="uppercase font-semibold text-xl">
              <span className="text-indigo-600 font-bold text-2xl">G</span>blog
            </Link>
          </div>

          {/* Search Form */}
          <form
            onSubmit={handleForm}
            className="hidden sm:flex items-center bg-gray-100 px-3 py-1 rounded-full w-full max-w-xs lg:max-w-sm"
          >
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent w-full outline-none text-sm"
            />
            <Search
              strokeWidth={1.5}
              size={16}
              className="text-gray-500 ml-1"
            />
          </form>

          {/* Profile Icon */}
          <div>
            <Link
              to="/login"
              className=" bg-indigo-500 text-white hover:bg-indigo-600 transition md:py-1 px-3 rounded-full pb-1 md:pb-2 tracking-wider md:tracking-widest"
            >
              Login
            </Link>
            {/* <img
              src="/images/default-profile-icon.png"
              alt="User icon"
              onClick={() => setShowProfile(!showProfile)}
              className="size-6 cursor-pointer"
            /> */}
          </div>
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
