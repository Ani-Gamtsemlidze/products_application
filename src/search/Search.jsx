import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import search from "../assets/search.png";
import { AddCartTheme } from "../Contexts/AddCartContext";

function Search() {
  const ctxAddCart = useContext(AddCartTheme);
  const nav = useNavigate();

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    ctxAddCart.setIsSearch(inputValue);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && ctxAddCart.isSearch.trim() !== "") {
      nav(`/search/?q=${ctxAddCart.isSearch}`);
    }
  };

  return (
    <>
      <div className=" py-2 relative max-lg:ml-2 max-lg:left-8">
        <img
          className="h-4 object-contain absolute left-3.5 top-3 translate-y-2/4"
          src={search}
        />
        <input
          onChange={handleInputChange}
          spellCheck={false}
          onKeyPress={handleSearch}
          className="rounded-3xl  px-10 w-56 outline-none 
          border-none bg-gray-50 duration-150 h-10
          focus:w-72  max-lg:w-36 max-lg:focus:w-36 max-lg:focus:border-none "
          type="text"
          placeholder="Search"
        />
      </div>
    </>
  );
}

export default Search;
