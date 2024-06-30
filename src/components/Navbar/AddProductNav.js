import React from "react";
import Btn from "../btn/Btn";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

function AddProductNav() {
  const navigate = useNavigate();
  return (
    <nav className="fixed z-10 left-0 right-0 top-0">
      <div className="flex items-center justify-between pr-2 bg-black">
        <div className="flex text-white sm:hidden md:hidden lg:flex">
          <Btn
            onClick={() => {
              navigate("/");
            }}
            variant="Contained"
            className="p-4 hover:bg-gray-300 hover:text-black rounded-none"
            text="Home"
            sx="mt:1"
          />
          <Btn
            onClick={() => {
              navigate("/product");
            }}
            variant="Contained"
            className="p-4 hover:bg-gray-300 hover:text-black rounded-none"
            text="Product"
            sx="mt:1"
          />
          <Btn
            onClick={() => {
              navigate("/band");
            }}
            variant="Contained"
            text="Band"
            className="p-4 hover:bg-gray-300 hover:text-black rounded-none sm:hidden md:hidden lg:block "
          />
          <Btn
            onClick={() => {
              navigate("/tour");
            }}
            variant="Contained"
            text="Tour"
            className="p-4 hover:bg-gray-300 hover:text-black rounded-none"
          />
          <Btn
            onClick={() => {
              navigate("/contact");
            }}
            variant="Contained"
            text="Contact"
            className="p-4 hover:bg-gray-300 hover:text-black rounded-none"
          />
        </div>
        <div></div>
        <div className="flex items-center gap-2 text-black">
          <div className="bg-white m-3 h-10 rounded-full flex items-center pl-2">
            <input
              placeholder="Search...."
              type="text"
              className="px-2 rounded-full p-1 outline-none"
            />
            <button className="p-2 hover:bg-red-600 rounded-r-full hover:text-white">
              <SearchIcon />
            </button>
          </div>
          <Btn
            onClick={() => {
              navigate("/add-product");
            }}
            variant="contained"
            className="text-white bg-red-500 hover:bg-red-400 transition-all duration-300"
            startIcon={<AddIcon />}
            text="AddProduct"
          />
          <Btn
            onClick={() => {
              navigate("/login");
            }}
            variant="contained"
            className="text-black bg-white hover:bg-slate-200 transition-all duration-300"
            text="Login"
          />
          <Btn
            onClick={() => {
              navigate("/signup");
            }}
            variant="outlined"
            className="text-white border-white hover:border-red-600 transition-all duration-300"
            text="Sign Up"
          />
        </div>
      </div>
    </nav>
  );
}

export default AddProductNav;
