import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className=" absolute top-0 left-0 min-h-screen w-screen flex items-center justify-center bg-gray-50 px-4 py-8 sm:py-12 overflow-y-auto ">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login Into Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>
          <div>
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition pr-10"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-5 text-gray-600">
          Create your account?{" "}
          <Link
            to="/signup"
            className="text-indigo-500 hover:underline font-medium"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
