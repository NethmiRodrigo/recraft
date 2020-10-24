const { default: Login } = require("../components/Login/login");
const { default: Register } = require("../components/Register/register");

const routes = {
	data: [
		{
			name: "Landing",
			path: "/",
			component: Login,
		},
		{
			name: "Register",
			path: "/register",
			component: Register,
		},
	],
};

export default routes;
