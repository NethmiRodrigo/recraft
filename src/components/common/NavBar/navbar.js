import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../MakeAdModal/modal";

const Navbar = (props) => {
	const [dialog, setDialog] = useState(false);
	return (
		<header>
			<div className="bg-green-900 py-4">
				<div className="container flex justify-between items-center mx-auto">
					<a
						href="/"
						className="font-bold text-gray-800 text-2xl tracking-widest "
					>
						<span className="flex items-center justify-between">
							<img
								src={require("../../../assets/images/logo.png")}
								className="h-20 w-20"
							/>
							<p>RECRAFT</p>
						</span>
					</a>
					<div>
						<ul className="flex items-center">
							<li className="p-2 mx-4">
								<div className="flex items-center border-b border-gray-500 py-2">
									<input
										className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none"
										type="text"
										placeholder="Search.."
									/>
									<button
										className="flex-shrink-0 bg-green-800 hover:bg-green-500 border-4 border-green-800 hover:border-green-500 text-white py-1 px-2 text-xs"
										type="button"
									>
										Search
									</button>
								</div>
							</li>
							<li className="mx-3">
								<a href="/">Home</a>
							</li>
							<li className="mx-3">
								<a href="#">Post event</a>
							</li>
							<li className="mx-3">
								<a
									href="#"
									onClick={() => {
										setDialog(true);
									}}
								>
									Post ad
								</a>
							</li>
							<Link to="/login">
								<button className="rpgui-button">Logout</button>
							</Link>
						</ul>
					</div>
				</div>
				{dialog ? <Modal deactivate={setDialog} /> : <></>}
			</div>
		</header>
	);
};

export default Navbar;
