import React from "react";
import "./pagenav.css";
import { NavLink } from "react-router-dom";

function PageNav() {
  return (
    <div>
      <ul className="flex justify-around bg-slate-950 text-white py-2.5 pl-9">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/smartphones">Smartphones</NavLink>
        </li>
        <li>Home Decoration</li>
        <li>Dresses</li>
      </ul>
    </div>
  );
}

export default PageNav;
