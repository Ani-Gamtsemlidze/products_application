import React from "react";
function FetchProducts({ data }) {
  return (
    <div className="flex flex-wrap p-5 bg-gray-100	">
      {data.map((item, index) => (
        <div key={index} className="m-2">
          <div className="bg-amber-400 w-72	h-full rounded">
            <div className="w-72 h-64 ">
              <img
                className="w-full h-full object-cover rounded "
                src={item.thumbnail}
              />
            </div>
            <div className="p-2">
              <div>
                <p className="text-cyan-950	">
                  {item.title} <span className="text-sm">({item.brand})</span>{" "}
                </p>
              </div>
              <div className=" min-w-min	mt-2	 ">
                {" "}
                <p className="text-sm">
                  {item.description.split(" ").slice(0, 10).join(" ")}
                  <span>...</span>
                </p>{" "}
              </div>
              <div className="flex items-center mt-2 border-t-2	">
                <span className="mt-1.5">{item.price} $</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FetchProducts;
