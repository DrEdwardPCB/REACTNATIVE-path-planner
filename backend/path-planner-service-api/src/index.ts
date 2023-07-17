import cluster from "node:cluster";
import process from "node:process";
if (cluster.isPrimary) {
	console.log(`Primary ${process.pid} is running`);

	// Fork workers.
	for (let i = 0; i < 4; i++) {
		cluster.fork();
	}

	cluster.on("exit", (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
	});
} else {
	require("./app");
}
