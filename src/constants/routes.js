import Landing from "../components/Landing/landing";
import Login from "../components/Login/login";
import Register from "../components/Register/register";
import ViewAllAds from "../components/ViewAllAdds/viewAllAds";
import Article from "../components/Article/Article1";

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
		{
			name: "ViewAllAds",
			path: "/ads",
			component: ViewAllAds,
		},
		{
			name: "Article",
			path: "/article",
			component: Article,
		},
	],
};

export default routes;
