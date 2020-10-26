import React from "react";
import Navbar from "../common/NavBar/navbar";

const ViewAllAds = () => {
	return (
		<div>
			<Navbar />
			<div className="container my-auto">
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
					</form>
				</div>
			</div>
		</div>
	);
};

export default ViewAllAds;
