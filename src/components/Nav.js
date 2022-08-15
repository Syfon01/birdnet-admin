import React from 'react'
import logo from "../img/Logo.svg";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="py-4 bg-slate-100">
        <nav className="container">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/">
                <img src={logo} className="w-24" alt="" />
              </Link>
            </div>
            <div>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link active" : "link"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/login"
                className="text-white border border-transparent btn bg-primary hover:bg-green-700"
              >
                Login
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav