import { MenuURL, swiggyURL } from "../mockData/constants";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./RestaurantSkeleton";
import { useEffect, useState } from "react";
import Top from "./Top";
import { Link } from "react-router";

const Body = ({ searchText = "" }) => {
  const [hotelList, setHotelList] = useState([]);
  const [topData, setTopData] = useState([]);

  const [filteredHotelList, setFilteredHotelList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filtered = hotelList.filter((resObj) =>
      resObj.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    setFilteredHotelList(filtered);

    // console.log("test", searchText);
  }, [searchText, hotelList]);

  const getData = async () => {
    const response = await fetch(swiggyURL);
    const data = await response.json();
    const restaurants =
      data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setHotelList(restaurants);
    setFilteredHotelList(restaurants);

    // const topData = data.data.cards[0].card.card.imageGridCards.info;
    setTopData(data.data.cards[0].card.card.imageGridCards.info);
    // console.log(setTopData);
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
      <div className="res-container">
        {filteredHotelList.map((resObj) => {
          return (
            <Link to={`/restaurant/${resObj?.info?.id}`} key={resObj?.info?.id}>
              <RestaurantCard resDetail={resObj?.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
