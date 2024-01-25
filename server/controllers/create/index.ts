import { Router } from "express";
import generateWorkOrderRouter from "./generate-workorder-router";

const router = Router();

router.use("/generate-workorder", generateWorkOrderRouter);

export default router;
