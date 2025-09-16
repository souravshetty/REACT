import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";


const RestaurantMenu=()=>{
    const[resInfo,setResInfo]=useState(null);
    //to dynaic get the res id 
    const {resId} = useParams();
    // const params=useParmas();
    // console.log(Params);
    // in order to call the api we can use use effect
  useEffect(()=>{
    fetchMenu();
  },[])
 const fetchMenu= async()=>{
    // const data = await fetch(
	// 		"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=23678"
	// 	);
    // All the apis shld come from constants
    //It will concatinate the resId to the Api
        const data = await fetch(MENU_API + resId);
    const json=await data.json();
    console.log(json);
    setResInfo(json.data)
   

 }
 if (resInfo === null) return <Shimmer />;


//destructering 
 const { name, cuisines, costForTwoMessage } =
		resInfo?.cards?.[2]?.card?.card?.info || {};

        const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        console.log (itemCards)



    // return  resInfo===null?(
    //     <Shimmer/>):
    //     ( intially it was like this but when i was calling the api the resinfo was null hence i was not able to located the name in it so move it above and return if its null
    return (
			<div className="Menu">
				<h1>{name}</h1>
				<h3>
					{cuisines.join(", ")} - {costForTwoMessage}
				</h3>
				<ul>
					{/* <li>{itemCards[0].card.info.name}</li>
                     <li>{itemCards[1].card.info.name}</li> * */}
					{itemCards.map((item) => (
						<li key={item.card.info.id}>
							{item.card.info.name} -{"Rs"}
							{Math.round(item.card.info.price / 100) ||
								item.card.info.defaultPrice/100}
						</li>
					))}
				</ul>
			</div>
		);

}
export default RestaurantMenu;