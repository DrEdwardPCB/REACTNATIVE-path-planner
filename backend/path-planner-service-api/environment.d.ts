declare global {
	namespace NodeJS {
		interface NodeEnv {
			NODE_ENV: string;
			PORT: number;
		}
	}
}
export {};
