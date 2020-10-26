import React from "react";

const Events = () => {
	return (
		<div>
			<h3>Events</h3>
			<div className="container mx-auto mb-10 justify-center items-center">
				<button className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto">
					<img
						className="w-full"
						src={require("../../assets/images/card-top.jpg")}
						alt="Sunset in the mountains"
					/>
					<div className="px-6 py-4">
						<div className="font-bold mb-2 text-center">
							24th October 2020 - Collecting recyclables
						</div>
					</div>
					<div className="px-6 pt-4 pb-2">
						<span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							By: Arid Company
						</span>
						<span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							Area: Rajagiriya
						</span>
						<span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							Condition: Recyclable
						</span>
					</div>
				</button>
			</div>
			<div className="mx-auto mb-10 mt-10">
				<button className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto">
					<img
						className="w-full"
						src={require("../../assets/images/card-top.jpg")}
						alt="Sunset in the mountains"
					/>
					<div className="px-6 py-4">
						<div className="font-bold mb-2 text-center">
							24th October 2020 - Collecting recyclables
						</div>
					</div>
					<div className="px-6 pt-4 pb-2">
						<span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							By: Arid Company
						</span>
						<span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							Area: Rajagiriya
						</span>
						<span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							Condition: Recyclable
						</span>
					</div>
				</button>
			</div>
		</div>
	);
};

export default Events;
