import React from "react";
import Btn from "../btn/Btn";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <div className="flex items-center justify-between pr-2 bg-black">
        <div className="flex text-white ">
          <Link to="/">
            <Btn
              variant="Contained"
              className="p-4 hover:bg-gray-300 hover:text-black rounded-none"
              text="Home"
              sx="mt:1"
            />
          </Link>
          <Link to="/brand">
            <Btn
              variant="Contained"
              text="Brand"
              className="p-4 hover:bg-gray-300 hover:text-black rounded-none "
            />
          </Link>
          <Link to="/tour">
            <Btn
              variant="Contained"
              text="Tour"
              className="p-4 hover:bg-gray-300 hover:text-black rounded-none"
            />
          </Link>
          <Link to="/contact">
            <Btn
              variant="Contained"
              text="Contact"
              className="p-4 hover:bg-gray-300 hover:text-black rounded-none"
            />
          </Link>
        </div>
        <div></div>
        <div className="flex items-center gap-2 text-black">
          <div className="bg-white m-3 h-10 rounded-full flex items-center px-2">
            <input
              placeholder="Search...."
              type="text"
              className="px-2 rounded-full border-none"
            />
            <button className="p-2 hover:bg-red-600">
              <SearchIcon />
            </button>
          </div>
          <Link to="/login">
            <Btn
              variant="contained"
              className="text-black bg-white"
              text="Login"
            />
          </Link>
          <Link to="/signup">
            <Btn
              variant="outlined"
              className="text-white border-white"
              text="Sign Up"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
