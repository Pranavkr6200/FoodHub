import { useEffect, useState } from "react";
import ResCard from "./ResCard";

const Body = (props) => {
  let [listOfRes, setListOfRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json);
      console.log(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setListOfRes(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log("listOfRes", listOfRes);
    } catch (err) {
      console.log("Error", err);
    }
  };
  return !listOfRes || listOfRes.length == 0 ? (
    <h1 className="text-white text-[40px] bg-slate-500 w-full h-screen flex justify-center items-center">
      Loading...
    </h1>
  ) : (
    <div className="flex flex-col gap-[20px]">
      {listOfRes?.map((res) => (
        <ResCard resData={res} handleAddToCart={props.handleAddToCart} />
      ))}
    </div>
  );
};

export default Body;
