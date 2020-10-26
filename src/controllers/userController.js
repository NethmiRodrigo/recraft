import axios from "axios";

const url = "http://localhost:3060/";

export function login(user) {
	return axios
		.post(url, user)
		.then((response) => {
			localStorage.setItem("Token", response.data);
			return response.data;
		})
		.catch((err) => {
			throw err;
		});
}

export function register(user,userDetails) {
	return axios
		.post(`${url}register`, user)
		.then((response) => {
			console.log(response)
			let userid =  response.data;
			userDetails['userId'] = userid;
			return userDetails;
		
		})
		.then(res=>{
			 axios
			.post(`${url}users`,res)
				.then((response)=>{
					console.log(response);
					return response;
				})
				.catch(err=>{
					console.log(err)
					throw err;
				})
				
		})
		.catch((err) => {
			throw err;
		});
}
