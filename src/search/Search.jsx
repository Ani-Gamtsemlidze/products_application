import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import search from "../assets/search.png";
import { AddCartTheme } from "../Contexts/AddCartContext";

function Search() {
  const ctxAddCart = useContext(AddCartTheme);

  const nav = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && ctxAddCart.isSearch.trim() !== "") {
      nav(`/search/?q=${ctxAddCart.isSearch}`);
    }
  };

  return (
    <>
      <div className="relative max-lg:ml-2 max-lg:left-8">
        <img
          className="h-4 object-contain absolute left-3.5 top-2 translate-y-2/4"
          src={search}
        />
        <input
          onChange={(e) => ctxAddCart.setIsSearch(e.target.value)}
          spellCheck={false}
          onKeyPress={handleSearch}
          className="rounded-3xl py-2.5 px-10 w-56 outline-none 
          border-none bg-gray-50 duration-150		
          focus:w-72  max-lg:w-36 max-lg:focus:w-36 max-lg:focus:border-none "
          type="text"
          placeholder="Search"
        />
      </div>
    </>
  );
}

export default Search;
