import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { register } from "../../controllers/userController";
import Error from "../common/alerts/error";
import Success from "../common/alerts/success";

const Register = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [city, setCity] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
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
		console.log("submitted");
		setSuccess(false);
		seterror(false);
		event.preventDefault();
		register(
			{ email: email, password },
			{ name: username, cityName: city, phone: phone }
		)
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
			{redirect ? <Redirect to="/login" /> : <> </>}
			<div
				className="font-bold text-xl mb-2 text-center"
				style={{ color: "white" }}
			>
				Register
			</div>
			<div className="w-full ">
				<form className="rounded px-8 pt-6 pb-8 mb-4" onSubmit={submit}>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="username"
						>
							Username
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							type="text"
							required
							onChange={(e) => setUsername(e.target.value)}
							value={username}
							placeholder="Username"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="example@example.com"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="city"
						>
							City
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-white"
							id="city"
							type="text"
							required
							value={city}
							onChange={(e) => setCity(e.target.value)}
							placeholder="Your city"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="mobile"
						>
							Contact Number
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-white"
							id="mobile"
							type="text"
							required
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							placeholder="0771234567"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="******************"
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="password"
						>
							Confirm Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
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
							Sign Up
						</button>
						<a
							className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ml-6"
							href="/login"
						>
							Already have an account?
						</a>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
