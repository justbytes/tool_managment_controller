import { Router } from "express";
import updateRoute from "./update-route";

const updateRouter = Router();

updateRouter.use("/update", updateRoute);

export default updateRouter;
