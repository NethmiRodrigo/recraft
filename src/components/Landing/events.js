import React, { useEffect, useState } from "react";
import { getAllSellers } from "../../controllers/sellerAddController";

const Events = () => {
	const [ads, setAds] = useState([]);
	useEffect(() => {
		getAllSellers()
			.then((res) => {
				console.log(res);
				setAds(res);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<h3>Events</h3>
			{ads.map((ad, i) => (
				<div className="container mx-auto mb-10 justify-center items-center">
					<button className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto">
						<img
							className="w-full"
							src={require("../../assets/images/card-top.jpg")}
							alt="Sunset in the mountains"
						/>
						<div className="px-6 py-4">
							<div className="font-bold mb-2 text-center">
								{ad.date} - {ad.conditionDetails}
							</div>
						</div>
						<div className="px-6 pt-4 pb-2">
							<span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
								By: {ad.name}
							</span>
							<span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
								Area: {ad.location}
							</span>
							<span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
								Condition: {ad.categoryName}
							</span>
							<span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
								Date: {ad.date}
							</span>
							<span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
								Time: {ad.time}
							</span>
							<span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
								Type: {ad.type}
							</span>
						</div>
					</button>
				</div>
			))}
		</div>
	);
};

export default Events;
