import React from "react";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/transactions">
              Transaction
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <img
          alt="header"
          src="https://www.nivabupa.com/content/dam/nivabupa/Image/claims%20header.png"
        />
      </div>
    </>
  );
};

export default MainNavigation;
