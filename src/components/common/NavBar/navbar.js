import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../MakeAdModal/modal";
import ModalEvent from "../MakeEventModal/modal"

const Navbar = (props) => {
	const [dialog, setDialog] = useState(false);
	const [eventdialog, seteventDialog] = useState(false);
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
							<li className="mx-3">
								<button className="rpgui-button">Home</button>
							</li>
							<li className="mx-3">
								<button 
								className="rpgui-button"
								onClick= { ()=> {
									seteventDialog(true)
								
								}

								}
								>Post event</button>
							</li>
							<li className="mx-3">
								<button
									className="rpgui-button"
									onClick={() => {
										setDialog(true);
									}}
								>
									Post ad
								</button>
							</li>
							<li>
								<Link to="/login">
									<button className="rpgui-button">Logout</button>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				{dialog ? <Modal deactivate={setDialog}/>  : <></>}
				{eventdialog ? <ModalEvent deactivate={seteventDialog}/> : <></>}
			</div>
		</header>
	);
};

export default Navbar;
