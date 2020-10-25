import React from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

//Constants
import routes from "./constants/routes";

//Styles
import "./assets/css/rpgui/rpgui.css";
import "./assets/css/tailwind.css";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					{routes.data.map((entry, i) => {
						return (
							<Route
								key={i}
								exact
								path={entry.path}
								render={() =>
									entry.name === "Login" || entry.name === "Register" ? (
										<div className="container mt-10 mb-10 mx-auto rpgui-content">
											<div
												id="containers"
												className="rpgui-container framed-grey container justify-between mx-auto"
											>
												<h1>RECRAFT</h1>
												<p className="text-center">
													Help us make the environment great again!
												</p>
												<hr />
												<div className="grid grid-flow-col auto-cols-max justify-center my-8">
													<div className="rpgui-container framed-golden relative max-w-sm h-full">
														<img
															className="h-auto w-full"
															src={require("./assets/images/background.png")}
															alt="Sunset"
														/>
														<div className="px-6 py-4">
															<p className="text-gray-700 text-base">
																Lorem ipsum dolor sit amet, consectetur
																adipisicing elit. Voluptatibus quia, nulla!
																Maiores et perferendis eaque, exercitationem
																praesentium nihil.
															</p>
														</div>
													</div>
													<div className="rpgui-container framed relative">
														<entry.component />
													</div>
												</div>
												<hr className="m-10" />
											</div>
										</div>
									) : (
										<div className="rpgui-content">
											<entry.component />
										</div>
									)
								}
							/>
						);
					})}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
