import react, { useEffect, useState } from "react";
import { MenuAPI } from "../Utils/constants";
import { useParams } from "react-router";
import RestaurantInfo from "./RestaurantInfo";
import MenuCategory from "./MenuCategory";

const RestaurantPage = () => {
  const { resId } = useParams();
  const [menu, setMenu] = useState(null);

  const getRestaurantPage = async () => {
    const MenuData = await fetch(MenuAPI + resId);
    const RawData = await MenuData.json();
    // console.log(RawData);
    setMenu(RawData);
  };

  const catagories =
    menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        if (
          category.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          return true;
        } else {
          return false;
        }
      },
    );

  // console.log(catagories);

  // console.log(menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  useEffect(() => {
    getRestaurantPage();
  }, [resId]);
  //   console.log(menu?.data?.cards[2]?.card?.card?.info);

  if (menu === null) {
    return <div>Loading ...........</div>;
  }

  return (
    <div>
      <RestaurantInfo menu={menu} />
      {catagories.map((category) => {
        console.log(category);
        return (
          <MenuCategory
            key={category.card.card.categoryId}
            categoryInfo={category.card.card}
          />
        );
      })}
    </div>
  );
};

export default RestaurantPage;
