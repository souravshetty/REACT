import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
	const { resdata } = props;
	console.log(resdata)
	return (
		<div className=" m-4 p-4  bg-gray-200 w-[250px] rounded-lg hover:bg-gray-500 hover:scale-1.2" >
			<img
				className="res-logo rounded-lg"
				alt="res-logo"
				src={CDN_URL
					 +
					resdata.info.cloudinaryImageId
				}
			/>
			<h3 className="font-bold py-2 text-lg hover:text-cyan-50">{resdata.info.name}</h3>
			<h4>{resdata.info.cuisines.join(",")}</h4>
			<h4>{resdata.info.avgRating} stars</h4>
			<h4>{resdata.info.costForTwo}</h4>
		</div>
	);
};

//Higher order component
//input -reatuarantCardPromoted
 export const withPromotedLabel=(RestaurantCard)=>{
	return(props)=>{
		return(
			<div>
				<label className="absolute bg-black m-2 p-2 text-white rounded-lg">Promoted</label>
				<RestaurantCard {...props}/>
				{/* //...props spread operator will receive all the props thats been passed in */}
			</div>
		)
	}
}

export default RestaurantCard;