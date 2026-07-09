import { swiggyURL } from "../mockData/constants";
import RestaurantCard from "./RestaurantCard";
import { resArr } from "../mockData/reslist";
import { Shimmer } from "./RestaurantSkeleton";
import { TopShimmer } from "./TopSkeleton";
import { useEffect, useState } from "react";

const Body = () => {
  const [hotelList, setHotelList] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    // const response = await fetch (
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.374638644228302&lng=78.4300148114562&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    const response = await fetch(swiggyURL);
    const data = await response.json();
    // console.log(data);
    console.log(
      data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );

    setHotelList(
      data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );

    console.log("hotel list", hotelList);
  };

  if (hotelList == null) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      {/* <Shimmer/>
    <div style={{margin: "100px "}}>
      {" "}
      <button onClick={getData}>Get data</button>{" "}
    </div> */}
      <div className="res-container">
        {/* {resArr.map((resObj) => (
          <RestaurantCard
            key={resObj.id}
            hotelData={resObj}
          />
        ))} */}
        {hotelList.map((resObj) => {
          return (
            <RestaurantCard resDetail={resObj?.info} key={resObj?.info?.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
