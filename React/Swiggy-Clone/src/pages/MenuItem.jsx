import { imgBaseURL } from "../Utils/constants";

const MenuItem = ({ details }) => {
    console.log(details);
    
//   console.log("details aagai", details);
  const { description, finalPrice, imageId, isVeg, name, price, ratings } =
    details;

    return(
        <div>
        <div className="menu-items">
            <h3>{details?.name}</h3>
            <p>₹{price}</p>
            <p>⭐{ratings.aggregatedRating.rating} ({ratings.aggregatedRating.ratingCount})</p>
            <p>{description}</p>
        </div>
        <div>
            <img src={imgBaseURL + imageId} alt={name} className="menu-item-image"/>
        </div>
        </div>
    )
};

export default MenuItem;
