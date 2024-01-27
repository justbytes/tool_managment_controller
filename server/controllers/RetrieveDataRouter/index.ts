import { Router } from "express";
import retrieveDataRoute from "./retrieve-data-route";

const retrieveDataRouter = Router();

retrieveDataRouter.use("/get", retrieveDataRoute);

export default retrieveDataRouter;
