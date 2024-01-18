import { useEffect, useState } from "react";
import { menuList_api } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);
  const fetchData = async () => {
    const data = await fetch(menuList_api  + resId);
    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
