import { Client } from "pg";

const database = new Client(
  process.env.NODE_ENV === "test"
    ? {
        user: "dev",
        host: "localhost",
        database: "tests_products",
        password: "181390mka",
        port: 5432,
      }
    : {
        user:process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      }
);

export const startDatabase = async () => {
  console.log("Database connected")
  await database.connect();
};

export default database;
