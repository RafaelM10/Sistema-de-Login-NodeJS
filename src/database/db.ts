import { Sequelize } from "sequelize";

export const db = new Sequelize(
  process.env.DATABASE_NAME!,
  process.env.DATABASE_USER!,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.DATABASE_HOST,
    port: 5432,
  }
);

export const syncDb = async () => db.sync();
