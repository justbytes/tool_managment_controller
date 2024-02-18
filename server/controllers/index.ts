import { Router } from "express";
import createRoute from "./Routes/create-route";
import getRoute from "./Routes/get-route";
import updateRoute from "./Routes/update-route";
import deleteRoute from "./Routes/delete-route";

const router = Router();

router.use("/create", createRoute);
router.use("/get", getRoute);
router.use("/update", updateRoute);
router.use("/delete", deleteRoute);

export default router;
