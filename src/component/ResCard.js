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
  return (
    <div className="restaurant-card w-full h-[160px] flex items-center justify-between p-8  ">
      <div className="image-container w-[200px] h-[160px] rounded-[20px]">
        <img
          id="restaurant-img"
          className="max-w-[200px] min-w-[200px] max-h-[160px] min-h-[160px] rounded-[20px] overflow-hidden"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="w-[120px] text-slate-100 font-semibold">
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
      <button className="bg-amber-400 p-[5px] rounded-xl text-sm font-medium text-slate-900">
        ADD TO CART
      </button>
    </div>
  );
};
export default ResCard;
