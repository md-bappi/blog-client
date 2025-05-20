import { Circle } from "lucide-react";
import { Link } from "react-router-dom";

const SidebarCategories = ({ data }) => {
  return (
    <div className=" flex flex-col gap-2">
      <span className="text-xs text-black/70">Category</span>
      {data.map((item) => (
        <div key={item.id} className=" flex items-center gap-1">
          <Circle size={6} strokeWidth={2} />
          <Link key={item.id} className=" text-sm text-black/70">
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SidebarCategories;
