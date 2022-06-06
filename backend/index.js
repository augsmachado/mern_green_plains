import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

import status from "./routes/status.routes.js";

// Initialize dotenv
dotenv.config();

// Web app's Firebase configuration
const firebase_config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebase = initializeApp(firebase_config);

// Define database
const db = getFirestore(firebase);

// Define analytics
// const analytics = getAnalytics(firebase);

// Define app conection and body parser
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Application routes
app.use("/", status);

app.use("*", (req, res) => {
	res.status(400).json({ error: "Not route found" });
});

app.listen(PORT, () => {
	console.log(`Server running in port: ${PORT}`);
});

export default app;
