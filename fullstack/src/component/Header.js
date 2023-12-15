import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import "./Header.css";

const Header = () => {
  const [activeTab, setActivetab] = useState("Home");

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setActivetab("Home");
    } else if (location.pathname === "./add") {
      setActivetab("AddUser");
    } else if (location.pathname === "/about") {
      setActivetab("About");
    }
  }, [location]);

  return (
    <div className="header">
      <p className="img">User System</p>
      <div className="header-jee">
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""} `}
            onClick={() => setActivetab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activeTab === "AddUser" ? "active" : ""} `}
            onClick={() => setActivetab("AddUser")}
          >
            Adduser
          </p>
        </Link>
        <Link to="/about">
          <p
            className={`${activeTab === "About" ? "active" : ""} `}
            onClick={() => setActivetab("About")}
          >
            About
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
