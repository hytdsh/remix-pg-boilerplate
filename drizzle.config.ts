import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./app/drizzle/schema.ts",
  out: "./app/drizzle/migration",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  }
});
