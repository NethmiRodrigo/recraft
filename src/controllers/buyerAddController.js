import axios from "axios";

const url = "http://localhost:3060/buyeradd";
const id = localStorage.getItem("Token");

export function getAllBuyers() {
	return axios
		.get(url)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			throw err;
		});
}

export function getBuyer(id) {
	return axios
		.get(`${url}/${id}`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			throw err;
		});
}

export function addBuyer(buyer) {
	return axios
		.post(`${url}`, buyer)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			throw err;
		});
}

export function deleteBuyer() {
	return axios
		.delete(`${url}/${id}`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			throw err;
		});
}
