import express, { Request, Response } from "express";
import router from "../controllers/index";
import sequelize from "../config/connection";
import cors from "cors";

require("dotenv").config();

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(cors());

// // connect routes
app.use(router);

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening to http://localhost:${PORT}/`);
    });
  })
  .catch((err: any) => {
    console.error(err);
    process.exit(1);
  });
