import RestaurantInfo from "./RestaurantInfo";
import useRestaurantMenu from "./useRestaurantMenu";
import { useParams } from "react-router";
import MenuCategory from "./MenuCategory";

const RestaurantPage = () => {
  const {resId} = useParams();

  const {menu, catagories} = useRestaurantMenu(resId)
  

  if (menu === null) {
    return <div className="Loading-state">Loading delicious Options...........</div>;
  }

  return (
    <div className="restaurant-page">
      <RestaurantInfo menu={menu} />
      {catagories.map((category) => {
        console.log(category);
        return (
          <MenuCategory
            key={category?.card?.card?.categoryId || category?.card?.card?.title}
            categoryInfo={category?.card?.card}
          />
        );
      })}
    </div>
  );
};

export default RestaurantPage;
