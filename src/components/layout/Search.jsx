import search from "../../assets/search.png";
function Search() {
  return (
    <>
      <div className="relative">
        <img
          className="h-4 object-contain absolute left-3.5 top-2 translate-y-2/4"
          src={search}
        />
        <input
          className="rounded-3xl py-2.5 px-10 w-56 outline-none border-none bg-gray-50 duration-75	focus:w-72 focus:border-solid border-2 border-slate-700 "
          type="text"
          placeholder="Search"
        />
      </div>
    </>
  );
}

export default Search;
