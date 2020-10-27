import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../common/NavBar/navbar";
import Events from "./events";
import Products from "./products";
import UserAds from "./userAds";

const Landing = (props) => {
	const token = localStorage.getItem("Token");
	return (
		<div>
			<Navbar />
			<div className="container flex my-10 mx-auto justify-items-center">
				<div className="container mx-auto bg-gray-900 rounded pr-10 pl-10 border-2 border-white w-max m-3 h-full mr-10">
					<Products />
				</div>
				<div className="container mx-auto bg-gray-900 rounded pr-10 pl-10 border-2 border-white w-max m-3 h-full mr-10">
					<Events />
				</div>
				<div className="container mx-auto justify-center bg-gray-900 rounded p-2 border-2 border-white w-max m-3 h-full">
					{!token ? (
						<div className="mx-auto justify-center text-center">
							<p>Login to view your ads</p>
							<Link to="/login">
								<button className="rpgui-button">Login</button>
							</Link>
						</div>
					) : (
						<UserAds button={true} heading="Your Ads" />
					)}
				</div>
			</div>
		</div>
	);
};

export default Landing;
