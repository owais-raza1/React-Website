import React from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import PinDropIcon from "@mui/icons-material/PinDrop";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Button from "../../btn/Btn";
function Brand() {
  return (
    <div>
      <Navbar />
      <h1 className="flex justify-center text-5xl font-sans text-gray-800 mt-20">
        CONTACT
      </h1>
      <br />
      <h1 className="flex justify-center text-lg font-thin text-gray-600! italic">
        Fan? Drop a note!
      </h1>
      <br />
      <br />
      <div className="flex justify-evenly mb-40">
        <div className="text-lg">
          <div>
            <PinDropIcon />
            <span className="ml-3">Karachi, Pakistan</span>
          </div>
          <div>
            <PhoneIcon />
            <span className="ml-3">+92 320 3558296</span>
          </div>
          <div>
            <EmailIcon />
            <span className="ml-3">syedowaisraza5@gmail.com</span>
          </div>
        </div>
        <div className="w-[34%]">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-400 p-2 rounded-sm mr-7"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-400 p-2 rounded-sm mb-3"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Message"
              className="border border-gray-400 p-2 rounded-sm w-full"
            />
          </div>
          <div className="flex justify-between mt-3">
            <div></div>
            <Button
              variant="outlined"
              text="SEND"
              className="rounded-none bg-black text-white font-semibold"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Brand;
