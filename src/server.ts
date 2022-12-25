import { AppDataSource } from "./data-source";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import session from "express-session";
import { redis } from "./redis";
import { COOKIE_NAME, THREE_DAYS } from "./utils/constants";
import cors from "cors";
import { createSchema } from "./utils/createSchema";

export async function startServer() {
  const app = express();
  const RedisStore = connectRedis(session);

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
  );

  app.use(
    session({
      secret: process.env.SESSION_COOKIE_SECRET as string,
      cookie: {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: THREE_DAYS,
      },
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis as any,
        disableTouch: true,
      }),
      saveUninitialized: false,
      resave: false,
    })
  );

  const server = new ApolloServer({
    schema: await createSchema(),
    playground: {
      settings: {
        "request.credentials": "include",
      },
    },
    context: ({ req, res }) => ({ req, res }),
  });

  server.applyMiddleware({ app });

  app.listen(process.env.PORT, () => console.log(`🚀 Server started`));
  AppDataSource.initialize();
}
