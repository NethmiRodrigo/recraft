import React from "react";

const UserAds = () => {
	return (
		<div>
			<h3>Your Ads</h3>
			<div className="container mb-10 mx-auto">
				<div className="flex bg-gray-500 w-full rounded-lg p-6">
					<img
						className="h-24 w-24 rounded-full mx-auto"
						src={require("../../assets/images/card-top.jpg")}
						alt="Sunset in the mountains"
					></img>
					<div className="font-bold text-black mt-2 text-left">
						<div className="text-center text-black">Reusable </div>
						<p className="m-5 ">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						</p>
					</div>
					<button className="border-2 border-red-700 rounded p-2 bg-red-700 h-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
						>
							<path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default UserAds;
