// src/Footer.js

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h1 className="text-2xl font-bold mb-4">My Website</h1>
            <p className="text-gray-400">
              Your go-to source for all things awesome. Stay connected with us
              for the latest updates and offers.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <Link to="/home" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/brand" className="text-gray-400 hover:text-white">
                  Brand
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/tour" className="text-gray-400 hover:text-white">
                  Tour
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-400">
              Street #5, Sector 16, Gulshan-e-bahar, Orangi town, Karachi
            </p>
            <p className="text-gray-400">Email: syedowaisraza5@gmail.com</p>
            <p className="text-gray-400">Phone: +92 320 3558692</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                target="_blank"
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
              >
                Facebook
              </a>
              <a
                target="_blank"
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                Twitter
              </a>
              <a
                target="_blank"
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold mb-2">Newsletter</h2>
            <form>
              <input
                type="email"
                className="px-4 py-2 w-full md:w-auto text-gray-800"
                placeholder="Enter your email"
              />
              <button className="mt-2 md:mt-0 md:ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; 2024 My Website. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
