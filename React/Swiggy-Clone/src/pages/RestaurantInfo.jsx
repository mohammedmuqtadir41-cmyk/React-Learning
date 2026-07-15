import react from "react";
import { imgBaseURL } from "../mockData/constants";


const RestaurantInfo = ({menu}) => {
    const {
    name,
    avgRatingString,
    costForTwo,
    totalRatingsString,
    cloudinaryImageId,
  } = menu?.data?.cards[2]?.card?.card?.info;
  console.log(menu?.data?.cards[2]?.card?.card?.info);
  
return(
    <div className="rest-page-container">
      <h1 className="menu-name">{name}</h1>;
      <img  className="menu-img"src={imgBaseURL + cloudinaryImageId} />
    </div>
);
}

export default RestaurantInfo;