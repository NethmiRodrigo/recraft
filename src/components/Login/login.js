import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../controllers/userController";

const Login = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState(false);

	const submit = (event) => {
		event.preventDefault();
		login({ email: username, password })
			.then((response) => {
				setSuccess(true);
				console.log(response);
				return <Redirect to="/" />;
			})
			.catch((err) => {
				console.log(err);
				return <Redirect to="/" />;
			});
	};

	return (
		<div>
			{success ? <Redirect to="?" /> : <> </>}
			<div className="font-bold text-xl mb-2 text-center text-white">Login</div>
			<div className="w-full ">
				<form className="rounded px-8 pt-6 pb-8 mb-4" onSubmit={submit}>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="username"
						>
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							value={username}
							required
							type="text"
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Username"
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							placeholder="******************"
						/>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="rpgui-button text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign In
						</button>
						<a
							className="inline-block align-baseline font-bold text-sm text-green-800"
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
