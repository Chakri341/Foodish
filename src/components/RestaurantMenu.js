import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();


  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;
  // data.cards[2].card.card.info.name

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info||
    resInfo?.cards[1]?.card?.card?.info||
    resInfo?.cards[2]?.card?.card?.info;


  const categories =
  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
    (c) =>
    c?.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ||
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
      ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories?.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
