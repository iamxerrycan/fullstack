import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const Header = () => {
  const [activeTab, setActivetab] = "Home";

  return (
    <div className="header">
      <p className="paragraph"> asdfghjsdfgh</p>
      <div className="header-jee">
        <link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""} `}
            onclick={() => setActivetab("Home")}
          >
            Home
          </p>
        </link>
        <link to="/">
          <p
            className={`${activeTab === "AddUser" ? "active" : ""} `}
            onclick={() => setActivetab("AddUser")}
          >
            Adduser
          </p>
        </link>
        <link to="/">
          <p
            className={`${activeTab === "About" ? "active" : ""} `}
            onclick={() => setActivetab("About")}
          >
            About
          </p>
        </link>
     
      </div>
    </div>
  );
};

export default Header;
