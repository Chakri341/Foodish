import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { resList_api } from "../utils/constants";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(resList_api);

    const json = await data.json();

    // Optional Chaining
    // console.log(json);

    setListOfRestraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        .restaurants ||
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          .restaurants ||
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          .restaurants ||
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          .restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        .restaurants ||
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          .restaurants ||
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          .restaurants ||
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          .restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="font-bold">
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );

  if (!filteredRestaurant) return <h2>no restaurant found</h2>;
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-white">
      <div className=" flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              // console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            <RestaurantCard resData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
