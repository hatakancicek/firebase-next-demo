const onRequest = require("firebase-functions").https.onRequest;

// Add pages you want to serve here.
const index = require("./pages/index");

exports.index = onRequest((req, res) => index.render(req, res));
