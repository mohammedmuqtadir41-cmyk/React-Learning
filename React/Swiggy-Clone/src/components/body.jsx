import { swiggyURL } from "../mockData/constants";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./RestaurantSkeleton";
import { useEffect, useState } from "react";

const Body = ({ searchText }) => {
  const [hotelList, setHotelList] = useState([]);
  const [filteredHotelList, setFilteredHotelList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filtered = hotelList.filter((resObj) =>
      resObj.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    setFilteredHotelList(filtered);
  }, [searchText, hotelList]);

  const getData = async () => {
    const response = await fetch(swiggyURL);
    const data = await response.json();

    const restaurants =
      data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setHotelList(restaurants);
    setFilteredHotelList(hotelList);
  };

  if (hotelList.length === 0) {
    return <Shimmer />;
  }

  const topRated = () => {
    const filtered = hotelList.filter((resObj) => resObj.info.avgRating >= 4.3);
    setFilteredHotelList(filtered);
  };

  const showAllRestaurants = () => {
    setFilteredHotelList(hotelList);
  };

  const sortByRating = () => {
    const filteredList = [...filteredHotelList].sort(
      (a, b) => b.info.avgRating - a.info.avgRating,
    );
    setFilteredHotelList(filteredList);
  };

  return (
    <div className="body">
      <div className="filter-container">
        <button onClick={topRated}>⭐Top Rated Restaurants</button>
        <button onClick={showAllRestaurants}>🍽️ All Restaurants</button>
        <button onClick={sortByRating}>Sort by Rating</button>
      </div>
      <div className="res-container">
        {filteredHotelList.map((resObj) => (
          <RestaurantCard key={resObj.info.id} hotelData={resObj.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
