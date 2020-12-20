"use strict";

const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json({extended: false}));

const port = 3000;
const script = require("./index");

app.post("/_info", (req, res) => {
	res.send("Hello World!");
});

app.post("/hook", async (req, res) => {
	const result = await script.handler(req.body);
	res.json(result);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
