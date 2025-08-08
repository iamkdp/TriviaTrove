import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import ToggleTheme from "./ToggleTheme";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <header className="w-full shadow-md bg-gray-100 dark:bg-gray-800 px-6 py-4">
      {/* Title & Tagline */}
      <div className="flex flex-col justify-center items-center  sm:text-left mb-4">
        <h1 className="text-3xl font-extrabold text-blue-600 dark:text-pink-400 tracking-widest">
          TriviaTrove
        </h1>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Play, Have Fun and Learn 😉!
        </h2>
      </div>

      {/* Navbar bar */}
      <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Left: user info */}
        <div className="flex items-center gap-4">
          {user ? (
            <span className="text-sm text-gray-700 dark:text-gray-200">
              👤 {user.email}
            </span>
          ) : (<span className="text-sm text-gray-700 dark:text-gray-200">
            👤 Guest
          </span>)}
        </div>

        {/* Right: auth buttons + theme toggle */}
        <div className="flex items-center gap-4">
          <ToggleTheme />
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 text-sm"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 text-sm"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
