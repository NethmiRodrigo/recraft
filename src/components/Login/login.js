import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../controllers/userController";
import Error from "../common/alerts/error";
import Success from "../common/alerts/success";

const Login = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState(false);
	const [error, seterror] = useState(false);
	const [redirect, setredirect] = useState(false);

	useEffect(() => {
		if (success) {
			setTimeout(() => {
				setredirect(true);
			}, 2000);
		}
	}, [success]);

	const submit = (event) => {
		setSuccess(false);
		seterror(false);
		event.preventDefault();
		login({ email: username, password })
			.then((response) => {
				setSuccess(true);
				console.log(response);
			})
			.catch((err) => {
				seterror(true);
				console.log(err);
			});
	};

	return (
		<div>
			{redirect ? <Redirect to="/" /> : <> </>}
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
					{error ? (
						<Error />
					) : success ? (
						<Success message="You will be redirected shortly" />
					) : (
						<> </>
					)}
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
