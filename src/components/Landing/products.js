import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
	return (
		<div>
			<div className="container mx-auto mb-10">
				<h3>Recyclable Products</h3>
				<div className="container max-w-xs flex rounded shadow-lg bg-white mx-auto my-auto mb-5">
					<img
						className="h-24 w-24mx-auto"
						src={require("../../assets/images/card-top.jpg")}
						alt="Sunset in the mountains"
					></img>
					<Link
						to="/ads"
						className="p-8 bg-gray-600 hover:bg-gray-400 p-2 text-center w-full"
					>
						Plastic
					</Link>
				</div>
				<div className="container max-w-xs flex rounded shadow-lg bg-white mx-auto my-auto mb-5">
					<img
						className="h-24 w-24mx-auto"
						src={require("../../assets/images/card-top.jpg")}
						alt="Sunset in the mountains"
					></img>
					<Link
						to="/ads"
						className="p-8 bg-gray-600 hover:bg-gray-400 p-2 text-center w-full"
					>
						Glass
					</Link>
				</div>
				<div className="container max-w-xs flex rounded shadow-lg bg-white mx-auto my-auto mb-5">
					<img
						className="h-24 w-24mx-auto"
						src={require("../../assets/images/card-top.jpg")}
						alt="Sunset in the mountains"
					></img>
					<Link
						to="/ads"
						className="p-8 bg-gray-600 hover:bg-gray-400 p-2 text-center w-full"
					>
						Organic
					</Link>
					<button className="bg-gray-600 hover:bg-gray-400 p-2 text-center w-full"></button>
				</div>
				<div className="container max-w-xs flex rounded shadow-lg bg-white mx-auto my-auto mb-5">
					<img
						className="h-24 w-24mx-auto"
						src={require("../../assets/images/card-top.jpg")}
						alt="Sunset in the mountains"
					></img>
					<Link
						to="/ads"
						className="p-8 bg-gray-600 hover:bg-gray-400 p-2 text-center w-full"
					>
						Textiles
					</Link>
				</div>
				<div className="container max-w-xs flex rounded shadow-lg bg-white mx-auto my-auto mb-5">
					<img
						className="h-24 w-24mx-auto"
						src={require("../../assets/images/card-top.jpg")}
						alt="Sunset in the mountains"
					></img>
					<Link
						to="/ads"
						className="p-8 bg-gray-600 hover:bg-gray-400 p-2 text-center w-full"
					>
						Metals
					</Link>
				</div>
			</div>
			<div className="container mx-auto mb-10 mt-10">
				<h3>Reusable Products</h3>
				<div className="container max-w-xs flex rounded shadow-lg bg-white mx-auto my-auto mb-5">
					<img
						className="h-24 w-24mx-auto"
						src={require("../../assets/images/card-top.jpg")}
						alt="Sunset in the mountains"
					></img>
					<Link
						to="/ads"
						button
						className="bg-gray-600 hover:bg-gray-400 p-2 text-center p-5"
					>
						Needs repair
					</Link>
				</div>
				<div className="container max-w-xs flex rounded shadow-lg bg-white mx-auto mt-5">
					<img
						className="h-24 w-24mx-auto"
						src={require("../../assets/images/card-top.jpg")}
						alt="Sunset in the mountains"
					></img>
					<Link
						to="/ads"
						button
						className="bg-gray-600 hover:bg-gray-400 p-2 text-center p-5"
					>
						Needs no repair
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Products;
