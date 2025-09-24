import { CDN_URL } from "../utils/constant";
const AccordianBody = ({ items }) => {
    
	return (
		<div>
			{items.map((item) => (
				<div
					key={item.card.info.id}
					className="m-2 bg-amber-100 border-b-2 text-left py-8 flex justify-between"
				>
					<div className="w-9/12">
						<div className="m-2 bg-amber-100 ">
							<span className="font-bold py-4">{item.card.info.name}</span>
							<span className="px-4">
								- (₹)
								{item.card.info.price
									? item.card.info.price / 100
									: item.card.info.defaultPrice / 100}
							</span>
						</div>
						<p className="text-xs m-2">{item.card.info.description}</p>
					</div>
					<div className="w-3/12 p-4 relative">
						<div className="absolute bottom-0">
							<button className="p-2 rounded-lg bg-black text-white shadow-lg">
								Add +
							</button>
						</div>
						<img src={CDN_URL + item.card.info.imageId} className="w-full " />
					</div>
				</div>
			))}
		</div>
	);
};

export default AccordianBody;
