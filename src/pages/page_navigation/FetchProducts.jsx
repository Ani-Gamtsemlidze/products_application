import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

import highRating from "../../assets/fullstar.png";
import lessRating from "../../assets/notfullstar.png";

function FetchProducts({ data, loading }) {
  return (
    <>
      {loading ? (
        <div className="flex max-lg:justify-center flex-wrap px-16 pt-2.5 py-3 bg-gray-100 h-full">
          {data.map((item, index) => (
            <div key={index} className="m-2">
              <div className="bg-amber-400 w-72 h-full rounded">
                <div className="w-72 h-64">
                  <Link to={`/innerProduct/${item.id}`}>
                    <img
                      className="w-full h-full object-cover rounded"
                      src={item.thumbnail}
                      alt={item.title}
                    />
                  </Link>
                </div>
                <div className="relative">
                  {item.rating < 5 ? (
                    <div className=" absolute bottom-1 flex  bg-slate-950 rounded-xl text-white p-2 m-2 w-20">
                      <p>{item.rating}</p>
                      <img
                        className="w-4 object-contain ml-1.5"
                        src={lessRating}
                      />
                    </div>
                  ) : (
                    <div className="flex  bg-slate-950 rounded-xl text-white p-2 m-2 w-20">
                      <p>{item.rating}</p>
                      <img
                        className="w-4 object-contain ml-1.5"
                        src={highRating}
                      />
                    </div>
                  )}
                </div>{" "}
                <div className="p-2">
                  <div>
                    <Link to={`/innerProduct/${item.id}`}>
                      <p className="text-slate-950 text-xl">
                        {item.title}{" "}
                        {/* <span className="text-sm">({item.brand})</span>{" "} */}
                      </p>
                    </Link>
                  </div>
                  <div className="min-w-min mt-2 justify-center flex">
                    <p className="text-sm">
                      {item.description.split(" ").slice(0, 8).join(" ")}
                      <span>...</span>
                    </p>
                  </div>
                  <div className="flex items-center mt-2 border-t-2">
                    <span className="mt-1.5 text-xl">{item.price} $</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-96 pt-20">
          <Loading />
        </div>
      )}
    </>
  );
}

export default FetchProducts;
