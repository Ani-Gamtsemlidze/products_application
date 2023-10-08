import React from "react";
import "./pagenav.css";
import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <div>
      <ul className="flex justify-around bg-slate-950 text-white py-2.5 pl-9">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/smartphones">Smartphones</NavLink>
        </li>
        <li>
          <NavLink to="/decoration">Home Decoration</NavLink>
        </li>
        <li>Dresses</li>
      </ul>
    </div>
  );
}

export default PageNav;
