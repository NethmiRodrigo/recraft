const express = require("express");
const firebase = require("firebase");
const config = require("./config/config");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
firebase.initializeApp(config);

//middleware
app.use(express.urlencoded());
app.use(express.json());

// users

var userfn = require("./routes/user.routes");
userfn(app);

// seller add

var selleraddfn = require("./routes/selleradd.routes");
selleraddfn(app);

//buyer add

var buyeraddfn = require("./routes/buyeradd.routes");
buyeraddfn(app);

//Sign up user

app.post("/register", (req, res) => {
	const newUser = {
		email: req.body.email,
		password: req.body.password,
		confirmPassword: req.body.cpassword,
		username: req.body.username,
	};

	firebase
		.auth()
		.createUserWithEmailAndPassword(newUser.email, newUser.password)
		.then((data) => {
			userId = data.user.uid;
			return data.user.getIdToken();
		})
		.catch((err) => {
			console.log(err);

			return res.status(500).json({ error: err.code });
		});
});

//login user

app.post("/", (req, res) => {
	console.log(req);
	const user = {
		email: req.body.email,
		password: req.body.password,
	};

	firebase
		.auth()
		.signInWithEmailAndPassword(user.email, user.password)
		.then((data) => {
			return data.user.getIdToken();
		})
		.then((token) => {
			return res.status(201).json({ token });
		})
		.catch((err) => {
			console.log(err);

			return res.status(500).json({ error: err.code });
		});
});

app.listen(3060, () => console.log("Running App"));
