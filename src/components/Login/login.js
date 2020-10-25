import React from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
	return (
		<div>
			<div className="font-bold text-xl mb-2 text-center text-white">Login</div>
			<div className="w-full ">
				<form class="rounded px-8 pt-6 pb-8 mb-4">
					<div class="mb-4">
						<label
							class="block text-gray-700 text-sm font-bold mb-2"
							for="username"
						>
							Username
						</label>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							required
							type="text"
							placeholder="Username"
						/>
					</div>
					<div class="mb-6">
						<label
							class="block text-gray-700 text-sm font-bold mb-2"
							for="password"
						>
							Password
						</label>
						<input
							class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							required
							placeholder="******************"
						/>
					</div>
					<div class="flex items-center justify-between">
						<Link to="/">
							<button
								class="rpgui-button text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
								type="submit"
							>
								Sign In
							</button>
						</Link>
						<a
							class="inline-block align-baseline font-bold text-sm text-green-800"
							href="/register"
						>
							Register?
						</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
