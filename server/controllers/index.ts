import { Router } from "express";
import workOrderRouter from "./WorkOrderRouter";
import retrieveDataRouter from "./RetrieveDataRouter";

const router = Router();

router.use("/workOrder", workOrderRouter);
router.use("/retrieve", retrieveDataRouter);

export default router;
