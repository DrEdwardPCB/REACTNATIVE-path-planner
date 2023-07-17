import express from "express";
import http from "node:http";
import { env } from "./config/env";

async function configApp() {
	const app = express();
	app.get("/", (req, res) => {
		return "helloworld";
	});
	const server = http.createServer(app).listen(env.PORT, () => {
		console.log(`start listening on port ${env.PORT}`);
	});
}
configApp().catch((err) => console.error(err));
