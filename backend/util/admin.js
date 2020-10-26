var admin  = require('firebase-admin')

const serviceAccount = require("./serviceAccount.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://recraft-dd2c9.firebaseio.com",
});


const db = admin.firestore();

module.exports = {admin, db};

