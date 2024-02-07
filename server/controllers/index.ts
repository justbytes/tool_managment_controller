import { Router } from "express";
import createRoute from "./Routes/create-route";
import getRoute from "./Routes/get-route";
import updateRoute from "./Routes/update-route";
const router = Router();

router.use("/create", createRoute);
router.use("/get", getRoute);
router.use("/update", updateRoute);

export default router;
