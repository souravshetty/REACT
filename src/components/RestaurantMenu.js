//detailed menu on clcking the rest card
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu=()=>{
   
    //to dynaic get the res id 
    const {resId} = useParams();
    const resInfo=useRestaurantMenu(resId)
    //removed all the beloe bcz for optimisation so that this component jsut foceuseon dispaying the restuarnats rather then fetching and diplaying
    //  const[resInfo,setResInfo]=useState(null);
    // const params=useParmas();
    // console.log(Params);
    // in order to call the api we can use use effect
//   useEffect(()=>{
//     fetchMenu();
//   },[])
//  const fetchMenu= async()=>{
    // const data = await fetch(
	// 		"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=23678"
	// 	);
    // All the apis shld come from constants
    //It will concatinate the resId to the Api
    //     const data = await fetch(MENU_API + resId);
    // const json=await data.json();
    // console.log(json);
    // setResInfo(json.data)
   

 
 if (resInfo === null) return <Shimmer />;


//destructering 
 const { name, cuisines, costForTwoMessage } =
		resInfo?.cards?.[2]?.card?.card?.info || {};

  const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log (resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
            c.card?.["card"]?.["@type"] ===
							"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        //Categories will have only the cards that have itemcategory in them
        console.log(categories)



    // return  resInfo===null?(
    //     <Shimmer/>):
    //     ( intially it was like this but when i was calling the api the resinfo was null hence i was not able to located the name in it so move it above and return if its null
    return (
			<div className="Menu text-center">
				<h1 className="font-bold my-6 text-2xl">{name}</h1>
				<h3 className="text-lg font-bold">
					{cuisines.join(", ")} - {costForTwoMessage}
				</h3>

				{/* <li>{itemCards[0].card.info.name}</li>
                     <li>{itemCards[1].card.info.name}</li> * */}
				{/* <ul>
					{itemCards.map((item) => (
						<li key={item.card.info.id}>
							{item.card.info.name} -{"Rs"}
							{Math.round(item.card.info.price / 100) ||
								item.card.info.defaultPrice / 100}
						</li>
					))}
				</ul> */}
                {categories.map((category)=><RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}/>)}

			</div>
		);

    }
export default RestaurantMenu;