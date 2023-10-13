import { Rating } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import "./rating.css";

function FetchProducts({ data, loading }) {
  const params = useParams();
  return (
    <>
      {loading ? (
        <div className="bg-gray-100">
          <h2 className="text-center text-2xl pt-8 capitalize 	">{params.id}</h2>
          <div className="flex  max-lg:justify-center flex-wrap px-16 pt-4 py-3 bg-gray-100 h-full">
            {data.map((item, index) => (
              <div key={index} className="m-2 ">
                <div className="bg-zinc-200	 w-72 h-full rounded ">
                  <div className="w-72 h-64">
                    <Link to={`/innerProduct/${item.id}`}>
                      <img
                        className="w-full h-full object-cover rounded-t-md		"
                        src={item.thumbnail}
                        alt={item.title}
                      />
                    </Link>
                  </div>
                  <div className="relative">
                    <div className=" absolute bottom-1 flex items-center bg-gray-100	 text-white p-2 rounded-r-lg	">
                      <p className="text-sm text-slate-950">{item.rating}</p>
                      <Rating
                        name="half-rating-read"
                        value={item.rating}
                        precision={0.5}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="p-2">
                    <div>
                      <Link to={`/innerProduct/${item.id}`}>
                        <p className="text-slate-950 text-base">
                          {item.title}{" "}
                        </p>
                      </Link>
                    </div>
                    <div className="w-64 h-16 mt-2  flex">
                      <p className="text-sm">
                        {item.description.split(" ").slice(0, 10).join(" ")}
                        <span>...</span>
                      </p>
                    </div>
                    <div className="flex items-center mt-2 pt-4 border-t	justify-between border-slate-950">
                      <span className=" text-xl text-slate-950">
                        {item.price} $
                      </span>
                      <div className="bg-color-yellow p-2 rounded">
                        <p>Add to cart</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
