import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addBuyer } from "../../../controllers/buyerAddController";
import Error from "../alerts/error";
import Success from "../alerts/success";

const Modal = (props) => {
	const token = localStorage.getItem("Token");
	const submit = (event) => {
		event.preventDefault();
		setSuccess(false);
		seterror(false);
		const ad = {
			userId: localStorage.getItem("Token"),
			categoryName: category,
			type: type,
			description: description,
			image: image,
			phone: mobile,
			location: location,
			price: price,
			isActive: true,
		};
		console.log(ad);
		addBuyer(ad)
			.then((response) => {
				console.log(response);
				setSuccess(true);
			})
			.catch((err) => {
				console.log(err);
				seterror(true);
			});
	};

	const useInput = ({ type }) => {
		const [value, setValue] = useState("");
		const input = (
			<div className="md:w-2/3">
				<input
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
						setSuccess(false);
					}}
					className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
					type={type}
				/>
			</div>
		);
		return [value, input];
	};
	const [success, setSuccess] = useState(false);
	const [error, seterror] = useState(false);
	const [category, setCategory] = useState("recycle");
	const [type, setType] = useState("");
	const [product, productInput] = useInput({ type: "text" });
	const [price, priceInput] = useInput({ type: "number" });
	const [mobile, mobileInput] = useInput({ type: "text" });
	const [location, locationInput] = useInput({ type: "text" });
	const [image, setImage] = useState("");
	const [description, setDescription] = useState("");
	return (
		<div>
			<div className="fixed z-10 inset-0 overflow-y-auto">
				<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
					<div className="fixed inset-0 transition-opacity">
						<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
					</div>
					<span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

					<div
						className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
						role="dialog"
						aria-modal="true"
						aria-labelledby="modal-headline"
					>
						<div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4 items-center text-center justify-center mx-auto">
							<div className="text-white text-lg border-b border-white">
								Post an advertisement for a product
							</div>
							{!token ? (
								<div className="mx-auto justify-center text-center">
									<p>Login to view your ads</p>
									<Link to="/login">
										<button className="rpgui-button">Login</button>
									</Link>
									<button
										className="rpgui-button"
										onClick={() => {
											props.deactivate(false);
										}}
									>
										Cancel
									</button>
								</div>
							) : (
								<div className="mt-5">
									<form className="w-full justify-center" onSubmit={submit}>
										<div className="md:flex md:items-center mb-6">
											<div className="md:w-1/3">
												<label className="block text-gray-500 font-bold text-xs md:text-right mb-1 md:mb-0 pr-4">
													Product Name
												</label>
											</div>
											{productInput}
										</div>
										<div className="md:flex md:items-center mb-6">
											<div className="md:w-1/3">
												<label className="block text-gray-500 text-xs font-bold md:text-right mb-1 md:mb-0 pr-4">
													Description
												</label>
											</div>
											<div className="md:w-2/3">
												<textarea
													id="about"
													rows="3"
													value={description}
													onChange={(e) => setDescription(e.target.value)}
													className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-gray-600"
													placeholder="A small description about the product"
												></textarea>
											</div>
										</div>
										<div className="md:flex md:items-center mb-6">
											<div className="md:w-1/3">
												<label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
													Category
												</label>
											</div>
											<div className="md:w-2/3">
												<select
													className="block appearance-none w-full bg-gray-200 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
													value={category}
													onChange={(e) => setCategory(e.target.value)}
												>
													<option value="recycle">Recyclable</option>
													<option value="reuse">Reusable</option>
												</select>
											</div>
										</div>
										<div className="md:flex md:items-center mb-6">
											<div className="md:w-1/3">
												<label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
													Type
												</label>
											</div>
											<div className="md:w-2/3">
												<select
													className="block appearance-none w-full bg-gray-200 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
													value={type}
													onChange={(e) => setType(e.target.value)}
												>
													{category === "recycle" ? (
														<>
															<option value="plastic">Plastic</option>
															<option value="glass">Glass</option>
															<option value="metal">Metals</option>
															<option value="organic">Organic</option>
															<option value="textile">Textiles</option>
														</>
													) : category === "reuse" ? (
														<>
															<option value="needs repair">Needs Repair</option>
															<option value="needs no repair">
																Needs no repair
															</option>
														</>
													) : (
														<> </>
													)}
												</select>
											</div>
										</div>
										<div className="md:flex md:items-center mb-6">
											<div className="md:w-1/3">
												<label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
													Price (Rs.)
												</label>
											</div>
											{priceInput}
										</div>
										<div className="md:flex md:items-center mb-6">
											<div className="md:w-1/3">
												<label className="block text-gray-500 font-bold text-xs md:text-right mb-1 md:mb-0 pr-4">
													Upload a picture of the product
												</label>
											</div>
											<div className="md:w-2/3">
												<input
													className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight overflow-hidden"
													id="inline-full-name"
													type="file"
													accept="image/png, image/jpeg"
													onChange={(e) => setImage(e.target.files[0])}
												/>
											</div>
										</div>
										<div className="md:flex md:items-center mb-6">
											<div className="md:w-1/3">
												<label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
													Phone Number
												</label>
											</div>
											{mobileInput}
										</div>
										<div className="md:flex md:items-center mb-6">
											<div className="md:w-1/3">
												<label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
													Location
												</label>
											</div>
											{locationInput}
										</div>
										{success ? (
											<Success message="Your ad has been posted" />
										) : error ? (
											<Error />
										) : (
											<> </>
										)}
										<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
											<span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
												<button
													type="button"
													onClick={() => {
														props.deactivate(false);
													}}
													className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
												>
													Cancel
												</button>
											</span>
											<span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
												<button
													type="button"
													type="submit"
													disabled={success ? true : false}
													className="inline-flex justify-center w-full rounded-md px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none transition ease-in-out duration-150 sm:text-sm sm:leading-5"
												>
													Post
												</button>
											</span>
										</div>
									</form>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
