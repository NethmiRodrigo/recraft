import React, { useEffect, useState } from "react";
import { getAds } from "../../controllers/userController";

const UserAds = (props) => {
	const token = localStorage.getItem("Token");
	const [ads, setAds] = useState([]);
	useEffect(() => {
		getAds(token)
			.then((res) => {
				console.log(res);
				setAds(res);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div>
			<h3>{props.heading}</h3>
			<div className="container mb-10 mx-auto">
				{ads.map((ad, i) => (
					<div className="flex bg-gray-500 w-full rounded-lg mb-2 mr-2">
						<img
							className="h-24 w-24 rounded-full mx-auto"
							src={require("../../assets/images/card-top.jpg")}
							alt="Sunset in the mountains"
						></img>
						<div className="font-bold text-black mt-2 text-left">
							<div className="text-center text-black">
								{ad.categoryName.toUpperCase()}
							</div>
							<p className="ml-5 mt-5"> {ad.description}</p>
							<div className="px-6 pt-4 pb-2">
								<span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
									Contact: {ad.phone}
								</span>
								<span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
									Location: {ad.location}
								</span>
								<span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
									Price: {ad.price}
								</span>
								<span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
									Type: {ad.type}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default UserAds;
