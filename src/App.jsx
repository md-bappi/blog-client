import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Comments from "./pages/Comments";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import CreateBlog from "./pages/CreateBlog";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Sidebar from "./components/navbar/Sidebar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-12">
        <span className=" hidden md:grid md:col-span-2">
          <Sidebar />
        </span>
        <Routes className=" col-span-10">
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/comments" element={<Comments />} />

          <Route path="*" element={<NotFound />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/create-blog" element={<CreateBlog />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
