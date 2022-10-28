import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <>
    <nav className="primary-nav">
      <div className="logo-container">
        <div className="logo"></div>
        <h2>MeetUp</h2>
      </div>
      <div className="links">
        <NavLink style={navLinkStyles} to="/">
          Home
        </NavLink>
        <NavLink style={navLinkStyles} to="/about">
          About
        </NavLink>
        <NavLink style={navLinkStyles} to="/users">
          Users
        </NavLink>
      </div>
    </nav>
    <Outlet />
    </>
  );
};
