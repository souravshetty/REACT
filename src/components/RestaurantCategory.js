import AccordianBody from "./AccordianBody";
import { useState } from "react";
const RestaurantCategory=({data})=>{
    const [showItems,setShowItems]=useState(false)
    console.log(data)
    const handleClick=()=>{
        setShowItems(!showItems)
        console.log("clicked")
    }
    return (
			//accordian header
			<div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
				<div className="flex justify-between cursor-pointer" onClick={handleClick}>
					<span className="text-lg font-bold">
						{data.title}({data.itemCards.length})
					</span>
					<span>⬇</span>
				</div>
				{/* accordian AccordianBody */}
				{showItems&& <AccordianBody items={data.itemCards} />}
			</div>
		);
}
export default RestaurantCategory;