import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";

// Initialize dotenv
dotenv.config();

export default class StatusController {
	static async getStatusApi(req, res) {
		try {
			let response = {
				msg: "Current API status",
				name: process.env.PROJECT_NAME,
				environment: process.env.PROJECT_ENVIRONMENT,
				version: process.env.PROJECT_VERSION,
				uptime: new Date().getTime(),
				hash: uuidv4(),
			};

			res.json(response);
		} catch (err) {
			res.status(500).json({
				error: "Unable to request API status",
				details: `${err}`,
			});
		}
	}
}
