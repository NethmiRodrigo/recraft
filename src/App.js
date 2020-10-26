import React from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

//Articles
// import Article1 from './components/Article/Article1';

//Constants
import routes from "./constants/routes";

//Styles
import "./assets/css/rpgui/rpgui.css";
import "./assets/css/tailwind.css";

function App() {
	return (
		<div>
			{/* <Article1 /> */}
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
													<div className="rpgui-container framed-golden relative max-w-sm h-full mr-3">
														<img
															className="h-auto w-full"
															src={require("./assets/images/new_background.jpeg")}
															alt="Sunset"
														/>
														<div className="px-6 py-4">
															<p className="text-gray-700 text-base">
															Recraft. A nationwide platform enabling you to Recycle and Reuse together and make Sri Lanka a better place.
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
