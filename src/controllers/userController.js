import axios from "axios";

const url = "http://localhost:3060/";

export function login(user) {
	return axios
		.post(url, user)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			throw err;
		});
}

export function register(user) {
	return axios
		.post(`${url}register`, user)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			throw err;
		});
}
