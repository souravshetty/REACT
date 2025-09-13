import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// let listOfRestaurants=[{
//     id: "994419",
//     name: "FreshMenu",
//     cloudinaryImageId:
//         "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/dc23bbe1-04ba-4414-8c26-7cf9b4118129_994419.jpg",
//     locality: "Bommanahalli",
//     areaName: "Bommanahalli",
//     costForTwo: "₹250 for two",
//     cuisines: [
//         "Continental",
//         "Chinese",
//         "Oriental",
//         "Asian",

//     ],
//     avgRating: 3.9,

// },
// {
//     id: "994420",
//     name: "Dominos",
//     cloudinaryImageId:
//         "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/dc23bbe1-04ba-4414-8c26-7cf9b4118129_994419.jpg",
//     locality: "Bommanahalli",
//     areaName: "Bommanahalli",
//     costForTwo: "₹250 for two",
//     cuisines: [
//         "Continental",
//         "Chinese",
//         "Oriental",
//         "Asian",

//     ],
//     avgRating: 4.9},
// ]

const Body = () => {
	///to check how many times the comp has rendered
	console.log("render");
	//local state variable -super powerful variable
	const [listOfRestaurants, setlistOfRestuarant] = useState([]);

	//initialsetFiltered res is alloted to orif=ginal list of rest
	const [filteredListOfRestaurant, setFilteredListOfRestauarnt] = useState([]);

	const [searchText, setSearchText] = useState("");
	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		const data = await fetch(
			"https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();
		console.log(json);
		console.log(
			json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
		);
		//optional chaining
		//Initially i am setting the list of restuarts to rest arrays
		setlistOfRestuarant(
			json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
		);
		setFilteredListOfRestauarnt(
			json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
		);
	};
	const getStatus = useOnlineStatus();
	if (getStatus == false) return <h1>Please check ur internet connection</h1>;
	//conditional rendering
	if (listOfRestaurants.length == 0) {
		return <Shimmer />;
	}
	return (
		<div className="body">
			<div className="filter">
				<div className="search">
					<input
						type="text"
						className="search-box"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
						onClick={() => {
							console.log(searchText);

							const filteredRestaurant = listOfRestaurants.filter((res) => {
								return res.info.name
									.toLowerCase()
									.includes(searchText.toLowerCase());
							});

							setFilteredListOfRestauarnt(filteredRestaurant);
						}}
					>
						search
					</button>
				</div>
				<button
					onClick={() => {
						const filteredList = listOfRestaurants.filter(
							(res) => res.info.avgRating > 3
						);
						setlistOfRestuarant(filteredList);
					}}
				>
					Filter Restaurant
				</button>
			</div>
			<div className="res-conatiner">
				{/* {console.log(listOfRestaurants)} */}
				{filteredListOfRestaurant.map((restaurant) => (
					<Link
						key={restaurant.info.id}
						to={"/restaurant/" + restaurant.info.id}
					>
						<RestaurantCard resdata={restaurant} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
