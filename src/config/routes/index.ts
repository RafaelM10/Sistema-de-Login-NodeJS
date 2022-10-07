import express from "express";
import UserControllers from "../../controllers/UserControllers";

const router = express.Router();

router.post("/login", UserControllers.createLogin);

export default router;
