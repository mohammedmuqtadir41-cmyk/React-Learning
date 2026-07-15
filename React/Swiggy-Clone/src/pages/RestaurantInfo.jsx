import react from "react";
import { imgBaseURL } from "../Utils/constants";

const RestaurantInfo = ({ menu }) => {
  const {
    name,
    avgRatingString,
    costForTwo,
    totalRatingsString,
    cloudinaryImageId,
    cuisines,
  } = menu?.data?.cards[2]?.card?.card?.info;
  // console.log(menu?.data?.cards[2]?.card?.card?.info);

  return (
    <div className="rest-page-container">
      <h1 className="menu-name">{name}</h1>;
      <img className="menu-img" src={imgBaseURL + cloudinaryImageId} />
      <h3>
        {avgRatingString} ({totalRatingsString} )
      </h3>
      <h3>{cuisines?.join(" ,")}</h3>
    </div>
  );
};

export default RestaurantInfo;
