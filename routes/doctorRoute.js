import express from "express";
import {
  getSingleDoctor,
  getAllDoctors,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "../routes/reviewRoute.js";

const router = express.Router();

router.use("/:doctorId/reviews", reviewRouter);

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctors);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);

export default router;
