import { useState } from "react";
import MenuItem from "./MenuItem";

const MenuCategory = ({ categoryInfo }) => {
  console.log(categoryInfo);
  const { title, itemCards } = categoryInfo;

  const [isOpen, setIsOpen] = useState(false);

  function toggleBody() {
    setIsOpen(!isOpen);
  }

  //   const itemCards = categoryInfo.itemCards;
  return (
    <div className="category-accordian">
      <div className="category-header" onClick={toggleBody}>
        <span>
          {title} ({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      {isOpen ? (
        <div className="category-body">
          <h2>{categoryInfo.title}</h2>

          {itemCards.map((item) => (
            <MenuItem details={item.card.info} key={item.card.info.id} />
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MenuCategory;
