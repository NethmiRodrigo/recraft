const { db } = require("../util/admin");

exports.createUser = (req, res) => {
	const newUser = {
		userId: req.body.userId,
		Name: req.body.name,
		cityName: req.body.cityName,
		phone: req.body.phone,
	};

	db.doc(`/users/${newUser.userId}`)
		.set(newUser)
		.then(() => {
			res.sendStatus(200);
		})
		.catch((err) => {
			console.log(err);
			return res.status(500).json({ error: err.code });
		});
};

exports.getUser = (req, res) => {
	let user = {};
	console.log(req.params, "Params");
	db.doc(`/users/${req.params.userId}`)
		.get()
		.then((doc) => {
			console.log(doc.data(), "Data");
			if (doc.exists) {
				user = doc.data();
				console.log(user);
				return res.status(200).send(user);
			} else {
				return res.status(404).json({ error: "User not found" });
			}
		});
};

exports.updateUser = (req, res) => {};

exports.deleteUser = (req, res) => {
	const document = db.doc(`/user/${req.params.userId}`);
	document.get().then((doc) => {
		if (!doc.exists) return res.status(404).json({ error: "User not found" });
		document.delete();
		return res.status(200).send(doc.data());
	});
};

exports.buyerAddsByUser = (req, res) => {
	let ads = [];
	db.collection("buyerAdd")
		.where("userId", "==", req.params.userId)
		.get()
		.then((data) => {
			data.forEach((doc) => {
				console.log(doc);
				ads.push({
					categoryName: doc.data().categoryName,
					description: doc.data().description,
					location: doc.data().location,
					phone: doc.data().phone,
					price: doc.data().price,
					type: doc.data().type,
				});
			});
			return res.json(ads);
		})
		.catch((err) => {
			console.log(err);
			return res.status(500).json({ error: err.code });
		});
};
