import { config } from "dotenv";
config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

export default {
  port: 3000,
  dbUri: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.h33ou0m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
  env: "development",
};
