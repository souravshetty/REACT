import { useEffect, useState } from "react";
import { MENU_API } from "./constant";
// the main job of this hook is to take resID and return the info about restaurnats info
const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null)
//fetch the data
useEffect(()=>{
    fetchData();
},[])
const fetchData=async()=>{
    const data=await fetch(MENU_API+resId)
    const json=await data.json();

    setResInfo(json.data)
    // this will update the reInfo

}
    return resInfo;

}
export default useRestaurantMenu