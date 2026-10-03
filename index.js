var express = require("express")
var app = express()
var bodyParser = require("body-parser")
const axios = require("axios")

app.use(bodyParser.json()) // for parsing application/json
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
) // for parsing application/x-www-form-urlencoded

// This is the route the API will call
app.post("/new-message", function (req, res) {
	// ✅ FIX 1: Destructure `message` FROM req.body (not from req.body.message.text)
	// ✅ FIX 2: Guard against missing body so .toLowerCase() never crashes
	const message = req.body && req.body.message;

	if (!message || !message.text) {
		return res.end()
	}

	// ✅ FIX 3: `message` is already an object; use message.text directly
	if (message.text.toLowerCase().indexOf("farouk") < 0) {
		// No "marco" in the message — do nothing
		return res.end()
	}

	// Respond with "Polo!!" to the same chat
	axios
		.post(
			"https://api.telegram.org/bot777845702:AAFdPS_taJ3pTecEFv2jXkmbQfeOqVZGER/sendMessage",
			{
				chat_id: message.chat.id,
				text: "Polo!!",
			}
		)
		.then((response) => {
			console.log("Message posted")
			res.end("ok")
		})
		.catch((err) => {
			console.log("Error :", err.message)
			res.end("Error :" + err.message)
		})
})

// Start our server
app.listen(3000, function () {
	console.log("Telegram app listening on port 3000!")
})