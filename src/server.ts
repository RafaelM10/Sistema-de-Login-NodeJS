import express, { json } from "express";
import { db, syncDb } from './database/db'
import { router } from "./routes";

syncDb()

const app = express();  

app.use(json())
app.use(router);

app.listen(3000, async () => {
  await db.sync();
  console.log("api running at 3000");
});
