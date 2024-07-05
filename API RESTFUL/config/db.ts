import config from "config";
import mongoose from "mongoose";
import Logger from "./logger";

const dbUri = config.get<string>("dbUri");

export default async function connect() {
  try {
    await mongoose.connect(dbUri);
    Logger.info("Conectado ao banco de dados!");
  } catch (error) {
    Logger.error(`Erro no banco de dados: ${error}`);
  }
}
