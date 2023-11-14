import { useEffect, useState } from "react";
import ResCard from "./ResCard";

const Body = () => {
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
  return (
    <div className="flex flex-col gap-[20px]">
      {listOfRes?.map((res) => (
        <ResCard resData={res} />
      ))}
    </div>
  );
};

export default Body;
