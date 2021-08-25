import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navbar = (props) => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <span className="">SDI Library</span>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link className="nav-link px-2 text-white" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link px-2 text-white" to="/users">
                Users
              </Link>
            </li>
            <li>
              <Link className="nav-link px-2 text-white" to="/librarian">
                Librarian
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
