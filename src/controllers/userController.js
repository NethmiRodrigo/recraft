import axios from "axios";

const url = "http://localhost:3060/";

export function login(user) {
	return axios
		.post(url, user)
		.then((response) => {
			console.log(response.data);
			localStorage.setItem("Token", response.data.token);
			return response.data;
		})
		.catch((err) => {
			throw err;
		});
}

export function register(user, userDetails) {
	return axios
		.post(`${url}register`, user)
		.then((response) => {
			let userid = response.data.data;
			userDetails["userId"] = userid;
			console.log(userDetails);
			return axios
				.post(`${url}users`, userDetails)
				.then((response) => {
					console.log(response);
					return response;
				})
				.catch((err) => {
					console.log(err);
					throw err;
				});
		})

		.catch((err) => {
			throw err;
		});
}

export function getUserDetails(id) {
	return axios
		.get(`${url}users/${id}`)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			throw err;
		});
}

export function getAds(id) {
	return axios
		.get(`${url}users/ads/${id}`)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			throw err;
		});
}
