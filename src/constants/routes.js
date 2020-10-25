import Landing from "../components/Landing/landing";
import Login from "../components/Login/login";
import Register from "../components/Register/register";

const routes = {
	data: [
		{
			name: "Login",
			path: "/login",
			component: Login,
		},
		{
			name: "Register",
			path: "/register",
			component: Register,
		},
		{
			name: "Home",
			path: "/",
			component: Landing,
		},
	],
};

export default routes;
