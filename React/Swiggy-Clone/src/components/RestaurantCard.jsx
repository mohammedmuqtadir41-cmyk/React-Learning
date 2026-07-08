const RestaurantCard = ({ hotelData }) => {
  const {
    resName,
    cuisine,
    avgRating,
    deliveryTime,
    costForTwo,
    imgId,
    location,
  } = hotelData;

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img
          className="res-logo"
          alt={resName}
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            imgId
          }
        />
      </div>

      <h3 className="res-title">{resName}</h3>

      <h4 className="res-cuisine">
        {cuisine.join(", ")}
      </h4>

      <h4 className="res-rating">
        ⭐ {avgRating} Stars
      </h4>

      <h4>{deliveryTime} mins</h4>

      <h4>{costForTwo}</h4>

      <h4 className="res-address">
        {location}
      </h4>
    </div>
  );
};

export default RestaurantCard;