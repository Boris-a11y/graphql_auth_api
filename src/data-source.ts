import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Workout } from "./entity/Workout";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE || "postgres",
  synchronize: true,
  logging: false,
  entities: [User, Workout],
  migrations: ["src/migration/*.ts"],
  subscribers: [],
});
