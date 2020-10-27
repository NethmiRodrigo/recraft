module.exports = (app) => {
	const users = require("../controllers/user.controller.js");

	app.post("/users", users.createUser);

	app.get("/users/:userId", users.getUser);

	app.put("/users/:userId", users.updateUser);

	app.delete("/users/:userId", users.deleteUser);

	app.get("/users/ads/:userId", users.buyerAddsByUser);
};
