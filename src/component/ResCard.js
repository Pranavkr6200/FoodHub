import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  let val = 0;
  return (
    <div className="flex justify-center items-center">
      <div className="restaurant-card w-full h-[160px] flex items-center justify-evenly xl:w-full ">
        <div className="image-container w-[200px] h-[160px] rounded-[20px]">
          <img
            id="restaurant-img"
            className="max-w-[200px] min-w-[200px] max-h-[160px] min-h-[160px] rounded-[20px] overflow-hidden"
            src={CDN_URL + cloudinaryImageId}
          />
        </div>
        <div className="w-[150px] text-slate-100 font-semibold">
          <h1 id="name">{name}</h1>
          <h6 className="cuisines text-slate-700">{cuisines.join(", ")}</h6>
          <div className="details ">
            <div className="rating text-slate-700">
              <div id="star-icon"></div>
              <h6>{avgRating}</h6>
            </div>
            <div className="price text-slate-700">{costForTwo}</div>
          </div>
        </div>
        <button
          className="bg-amber-400 p-[5px] rounded-xl text-sm font-medium text-slate-900"
          onClick={() => props.handleAddToCart(val)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
export default ResCard;
