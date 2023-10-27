import express from "express";
import {
  getSingleDoctor,
  getAllDoctors,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctorController.js";

const router = express.Router();

router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctors);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;
