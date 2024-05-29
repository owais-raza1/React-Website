import React from "react";
import Btn from "../btn/Btn";
import SearchIcon from "@mui/icons-material/Search";
function NavBar() {
  return (
    <nav>
      <div className="flex items-center justify-between pr-2 bg-black">
        <div className="flex text-white ">
          <Btn
            variant="Contained"
            className="p-4 hover:bg-gray-300 hover:text-black rounded-none"
            text="Home"
            sx="mt:1"
          />
          <Btn
            variant="Contained"
            text="Brand"
            className="p-4 hover:bg-gray-300 hover:text-black rounded-none "
          />
          <Btn
            variant="Contained"
            text="Tour"
            className="p-4 hover:bg-gray-300 hover:text-black rounded-none"
          />
          <Btn
            variant="Contained"
            text="Contact"
            className="p-4 hover:bg-gray-300 hover:text-black rounded-none"
          />
        </div>
        <div></div>
        <div className="flex items-center gap-2 text-black">
            <div className="bg-white m-3 h-10 rounded-full flex items-center px-2">
                <input placeholder="Search...." type="text" className="px-2 rounded-full" />
          <button className="p-2 hover:bg-red-600">

            <SearchIcon />
          </button>
          </div>
          <Btn
            variant="contained"
            className="text-black bg-white"
            text="Login"
          />
          <Btn
            variant="outlined"
            className="text-white border-white"
            text="Sign Up"
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;