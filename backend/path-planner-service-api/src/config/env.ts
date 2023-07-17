import "dotenv/config";
import process from "node:process";
import { cleanEnv, port, str } from "envalid";

export const env = cleanEnv(process.env, {
	NODE_ENV: str(),
	PORT: port(),
});
