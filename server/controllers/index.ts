import { Router } from "express";
import workOrderRouter from "./WorkOrderRouter";

const router = Router();

router.use("/workOrder", workOrderRouter);

export default router;
