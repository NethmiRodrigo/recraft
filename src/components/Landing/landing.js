import React from "react";
import Navbar from "../common/navbar";

const Landing = (props) => {
	return (
		<div>
			<Navbar />
			<div className="container flex mx-auto mt-10 justify-between">
				<div className="container mx-auto bg-gray-900 rounded p-2 border-2 border-white w-max m-3 h-full mr-10">
					<div className="container mb-10 mt-10 items-center">
						<h3>Recyclable Products</h3>
						<div className="max-w-xs rounded overflow-hidden shadow-lg bg-white mx-auto">
							<img
								className="w-full"
								src={require("../../assets/images/card-top.jpg")}
								alt="Sunset in the mountains"
							></img>
							<button className="bg-gray-600 hover:bg-gray-400 w-full h-full p-2">
								Browse Items
							</button>
						</div>
					</div>
					<div className="container mx-auto mb-10 mt-10">
						<h3>Reusable Products</h3>
						<div className="max-w-xs rounded overflow-hidden shadow-lg bg-white mx-auto">
							<img
								className="w-full"
								src={require("../../assets/images/card-top.jpg")}
								alt="Sunset in the mountains"
							></img>
							<button className="bg-gray-600 hover:bg-gray-400 w-full h-full p-2">
								Browse Items
							</button>
						</div>
					</div>
				</div>
				<div className="container mx-auto bg-gray-900 rounded p-2 border-2 border-white w-max m-3 h-full mr-10">
					<h3>Events</h3>
					<div className="container mx-auto mb-10 mt-10 justify-center items-center">
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
				<div className="container mx-auto justify-center bg-gray-900 rounded p-2 border-2 border-white w-max m-3 h-full">
					<h3>Your Ads</h3>
					<div className="container mb-10 mt-10">
						<div className="max-w-xs rounded overflow-hidden shadow-lg items-center bg-white mx-auto">
							<img
								className="w-full"
								src={require("../../assets/images/card-top.jpg")}
								alt="Sunset in the mountains"
							></img>
							<div className="font-bold mb-2 text-center text-white m-2">
								Reusable
							</div>
							<p className="text-center m-5">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							</p>
							<button className="bg-gray-600 hover:bg-gray-400 w-full h-full p-2">
								Delete Ad
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
