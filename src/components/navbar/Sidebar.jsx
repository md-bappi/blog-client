import { GitCommit, Home } from "lucide-react";
import SidebarCategories from "./SidebarCategories";
import NavLink from "./NavLink";

const Sidebar = () => {
  const CategoriesData = [
    {
      id: 1,
      title: "Business",
    },
    {
      id: 2,
      title: "Education & Career",
    },
    {
      id: 3,
      title: "Entertainment",
    },
    {
      id: 4,
      title: "Fashion & Beauty",
    },
    {
      id: 5,
      title: "Food & Drinks",
    },
    {
      id: 6,
      title: "Humanities & Law",
    },
    {
      id: 7,
      title: "News & Politics",
    },
    {
      id: 8,
      title: "Places & Travel",
    },
    {
      id: 9,
      title: "Sports",
    },
    {
      id: 10,
      title: "Technology",
    },
    {
      id: 11,
      title: "Wellness",
    },
  ];

  return (
    <div className=" px-2 h-screen shadow ">
      {/* pages */}
      <div className=" py-3 flex flex-col gap-2">
        <NavLink icons={<Home size="16" />} name="Home" />
        <NavLink icons={<GitCommit size="16" />} name="Blogs" />
        <NavLink icons={<GitCommit size="16" />} name="Comments" />
      </div>

      {/* sidebar categories */}
      <SidebarCategories data={CategoriesData} />
    </div>
  );
};

export default Sidebar;
