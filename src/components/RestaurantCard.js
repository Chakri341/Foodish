import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData;

  // console.log(resData);
const newCusines=cuisines.slice(0,4);

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-pink-200  hover:bg-gray-200" 
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}/>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="font-bold">{newCusines.join(", ")}....</h4>
      <h4 className="font-bold">{avgRating} stars</h4>
      <h4 className="font-bold">{costForTwo}</h4>
      <h4 className="font-bold">{sla.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
