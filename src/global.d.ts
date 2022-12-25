declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    SESSION_COOKIE_SECRET: string;
    DB_PASSWORD: string;
    DB_USERNAME: string;
    DB_DATABASE: string;
  }
}
