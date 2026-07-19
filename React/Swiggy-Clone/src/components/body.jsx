import { MenuURL, swiggyURL } from "../Utils/constants";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./RestaurantSkeleton";
import { useContext, useEffect, useState } from "react";
import Top from "./Top";
import { Link } from "react-router";
import HotelListContext from "../Utils/HotelListContext";

const Body = () => {
  const { hotelList, setHotelList, allItems, setAllItems } =
    useContext(HotelListContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(swiggyURL);
    const data = await response.json();
    const restaurants =
      data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setHotelList(restaurants);
    setAllItems(restaurants);
  };

  if (!hotelList || hotelList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="res-container">
        {hotelList.map((resObj) => {
          return (
            <Link
              className="res-link"
              to={`/restaurant/${resObj?.info?.id}`}
              key={resObj?.info?.id}
            >
              <RestaurantCard resDetail={resObj?.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
