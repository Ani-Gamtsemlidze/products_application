import React from "react";
import logo from "../../../assets/logo-footer.png";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-slate-950  text-white flex items-center flex-col ">
      <div className="pt-4 pb-4 text-sm text-center">
        <p>Created by &copy;Ani Gamtsemlidze</p>
      </div>
    </div>
  );
}

export default Footer;
