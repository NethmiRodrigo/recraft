import React, { useEffect, useState } from "react";
import { getAllBuyers } from "../../controllers/buyerAddController";
import Navbar from "../common/NavBar/navbar";

const ViewAllAds = () => {
	const [ads, setAds] = useState([]);

	useEffect(() => {
		getAllBuyers()
			.then((res) => {
				console.log(res);
				setAds(res);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<Navbar />
			<div className="container my-auto flex mx-auto">
				<div className="w-1/3 bg-gray-900 rounded pr-10 pl-10 border-2 border-white w-max m-3 h-full mr-10 text-white mt-10">
					<p>Filter ads</p>
					<form className="w-full max-w-lg my-10">
						<p>Category</p>
						<div className="md:flex md:items-center mb-6">
							<div className="md:w-1/3">
								<input type="radio" value="recycle" />
							</div>
							<div className="md:w-2/3 text-left">Recyclable Products</div>
						</div>
						<div className="md:flex md:items-center mb-6">
							<div className="md:w-1/3">
								<input type="radio" value="reuse" />
							</div>
							<div className="md:w-2/3 text-left">Reusable Products</div>
						</div>
						<p>Type</p>
						<div className="md:flex md:items-center mb-6">
							<div className="md:w-1/3">
								<input type="radio" value="recycle" />
							</div>
							<div className="md:w-2/3 text-left">Needs repair</div>
						</div>
						<div className="md:flex md:items-center mb-6">
							<div className="md:w-1/3">
								<input type="radio" value="reuse" />
							</div>
							<div className="md:w-2/3 text-left">Plastic</div>
						</div>
						<div className="md:flex md:items-center mb-6">
							<div className="md:w-1/3">
								<input type="radio" value="reuse" />
							</div>
							<div className="md:w-2/3 text-left">Glass</div>
						</div>
						<div className="md:flex md:items-center mb-6">
							<div className="md:w-1/3">
								<input type="radio" value="reuse" />
							</div>
							<div className="md:w-2/3 text-left">Organic</div>
						</div>
						<div className="md:flex md:items-center mb-6">
							<div className="md:w-1/3">
								<input type="radio" value="reuse" />
							</div>
							<div className="md:w-2/3 text-left">Textiles</div>
						</div>
					</form>
				</div>
				<div className="w-2/3 bg-gray-900 rounded pr-10 pl-10 border-2 border-white w-max m-3 h-full mr-10 text-white mt-10 p-2">
					<h3> All ads </h3>
					<div className="container mb-10 mx-auto">
						{ads.map((ad, i) => (
							<div className="flex bg-gray-500 w-full rounded-lg p-6">
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
			</div>
		</div>
	);
};

export default ViewAllAds;
