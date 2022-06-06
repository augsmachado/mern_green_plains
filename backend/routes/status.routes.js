import express from "express";
import StatusCtrl from "../controllers/status.controller.js";

const router = express.Router();

router.route("/api").get(StatusCtrl.getStatusApi);

export default router;
