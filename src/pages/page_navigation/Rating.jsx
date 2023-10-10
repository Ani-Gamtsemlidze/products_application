import React from "react";
import highRating from "../../assets/fullstar.png";
import lessRating from "../../assets/notfullstar.png";
function Rating({ data }) {
  return (
    <div>
      {data.rating < 5 ? (
        <div className="flex mt-2">
          <p>{data.rating}</p>
          <img className="w-4 object-contain ml-1.5" src={lessRating} />
        </div>
      ) : (
        <div>
          <p>{data.rating}</p>
          <img className="w-4 object-contain ml-1.5" src={highRating} />
        </div>
      )}
    </div>
  );
}

export default Rating;
