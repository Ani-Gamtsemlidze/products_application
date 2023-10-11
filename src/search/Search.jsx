import { useState } from "react";
import { useNavigate } from "react-router-dom";
import search from "../assets/search.png";

function Search() {
  const [isSearch, setIsSearch] = useState("");

  const nav = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && isSearch.trim() !== "") {
      nav(`/search/?q=${isSearch}`);
    }
  };

  return (
    <>
      <div className="relative">
        <img
          className="h-4 object-contain absolute left-3.5 top-2 translate-y-2/4"
          src={search}
        />
        <input
          onChange={(e) => setIsSearch(e.target.value)}
          spellCheck={false}
          onKeyPress={handleSearch}
          className="rounded-3xl py-2.5 px-10 w-56 outline-none 
          border-none bg-gray-50 duration-75	
          focus:w-72 focus:border-solid border-2
          border-slate-700 max-lg:w-36 max-lg:focus:w-36 max-lg:focus:border-none "
          type="text"
          placeholder="Search"
        />
      </div>
    </>
  );
}

export default Search;
