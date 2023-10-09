import React from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function FetchProducts({ dataFetch, loading }) {
  return (
    <>
      {loading ? (
        <div className="flex flex-wrap px-16 pt-2.5 py-3 bg-gray-100 h-full">
          {dataFetch.map((item, index) => (
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
                <div className="p-2">
                  <div>
                    <p className="text-slate-950">
                      {item.title}{" "}
                      <span className="text-sm">({item.brand})</span>{" "}
                    </p>
                  </div>
                  <div className="min-w-min mt-2">
                    <p className="text-sm">
                      {item.description.split(" ").slice(0, 10).join(" ")}
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
