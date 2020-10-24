import React from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

//Constants
import routes from "./constants/routes";

//Styles
import "./assets/css/rpgui/rpgui.css";

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
									entry.name === "Landing" || entry.name === "Register" ? (
										<div className="rpgui-content mx-auto justify-center flex w-full">
											<div
												id="containers"
												className="rpgui-container framed-grey"
											>
												<h1> RECRAFT </h1>
												<p className="text-center">
													A recycling platform for those who care about the
													environment
												</p>
												<hr />
												<div className="grid grid-flow-col auto-cols-max justify-center my-8">
													<div className="rpgui-container framed-golden relative max-w-sm h-full">
														<img
															className="h-auto w-full"
															src={require("./assets/images/card-top.jpg")}
															alt="Sunset"
														/>
														<div class="px-6 py-4">
															<p class="text-gray-700 text-base">
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
												<hr />
											</div>
										</div>
									) : (
										<entry.component />
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
