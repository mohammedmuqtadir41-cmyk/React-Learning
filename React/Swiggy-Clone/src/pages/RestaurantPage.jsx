import react, { useEffect, useState } from "react";
import { MenuAPI } from "../mockData/constants";
import { useParams } from "react-router";

const RestaurantPage = () => {
  const { resId } = useParams();
  const [menu, setMenu] = useState(null);

  const getRestaurantPage = async () => {
    const MenuData = await fetch(MenuAPI + resId);
    const RawData = await MenuData.json();
    // console.log(RawData);
    setMenu(RawData);
  };
  useEffect(() => {
    getRestaurantPage();
  }, [resId]);
//   console.log(menu?.data?.cards[2]?.card?.card?.info);

  if (menu === null){
    return <div>Loading ...........</div>
  }
  const { name, avgRatingString, costForTwo, totalRatingsString, cloudinaryImageId } =
    menu?.data?.cards[2]?.card?.card?.info;

  return <h1>{name}</h1>;
};

export default RestaurantPage;
