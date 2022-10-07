import express, { json } from "express";
import db from "./config/database/db";
import router from "./config/routes/index";

const app = express();

app.use(json());
app.use(router);

app.listen(3000, async () => {
  await db.authenticate();
  await db.sync();
  console.log("App runing on 3000");
});
