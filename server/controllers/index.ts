import { Router } from "express";
import workOrderRouter from "./WorkOrderRouter";
import retrieveDataRouter from "./RetrieveDataRouter";
import updateRouter from "./UpdateRouter";

const router = Router();

router.use("/workOrder", workOrderRouter);
router.use("/retrieve", retrieveDataRouter);
router.use("/put", updateRouter);

export default router;
