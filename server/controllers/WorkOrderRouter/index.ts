import { Router } from "express";
import workOrderRoute from "./workorder-route";

const workOrderRouter = Router();

workOrderRouter.use("/add", workOrderRoute);

export default workOrderRouter;
