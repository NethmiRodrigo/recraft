const { db } = require("../util/admin");
const { v4: uuidv4 } = require("uuid");
const admin = require("firebase-admin");
const config = require("../config/config");
const multer = require("multer");

var imageFileName = "";
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "public/tmp/");
	},
	filename: function (req, file, cb) {
		imageFileName = file.fieldname + "-" + Date.now() + ".png";
		cb(null, imageFileName);
	},
});

exports.upload = multer({ storage: storage });

exports.createBuyerAdd = (req, res) => {
	const imgToken = uuidv4();

	admin
		.storage()
		.bucket("recraft-dd2c9.appspot.com")
		.upload("public/tmp/" + imageFileName, {
			resumable: false,
			metadata: {
				metadata: {
					//Generate token to be appended to imageUrl
					firebaseStorageDownloadTokens: imgToken,
				},
			},
		});

	let addId = uuidv4();

	console.log(req.body);

	const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media&token=${imgToken}`;
	const newBuyeradd = {
		addId: addId,
		userId: req.body.userId,
		type: req.body.type,
		categoryName: req.body.categoryName,
		description: req.body.description,
		imageUrl: imageUrl,
		price: req.body.price,
		phone: req.body.phone,
		location: req.body.location,
		postDate: new Date().toISOString(),
		isActive: req.body.isActive,
	};

	db.collection("buyerAdd")
		.add(newBuyeradd)
		.then(() => {
			res.json(newBuyeradd);
		});
};
exports.getAllbuyerAdd = (req, res) => {
	db.collection("buyerAdd")
		.orderBy("postDate", "desc")
		.get()
		.then((data) => {
			let buyerAddList = [];
			data.forEach((doc) => {
				buyerAddList.push(doc.data());
			});
			return res.json(buyerAddList);
		})
		.catch((err) => {
			console.error(err);
			res.status(500).json({ error: err.code });
		});
};
exports.getBuyerAdd = (req, res) => {
	let BuyerAdd = {};
	db.doc(`/buyerAdd/${req.params.addId}`)
		.get()
		.then((doc) => {
			if (!doc.exists)
				return res.status(404).json({ error: "Buyer not found" });
			BuyerAdd = doc.data();
			console.log(BuyerAdd);
			return res.status(200).send(BuyerAdd);
		});
};

exports.updateBuyerAdd = (req, res) => {};

exports.deleteBuyerAdd = (req, res) => {
	const document = db.doc(`/buyerAdd/${req.params.addId}`);
	document.get().then((doc) => {
		if (!doc.exists) return res.status(404).json({ error: "Buyer not found" });
		document.delete();
		return res.status(200).send(doc.data());
	});
};
