import "dotenv/config";
import type {Config} from "drizzle-kit";
export default {
  schema: "./db/schema.ts", // Your schema location
  out: "./drizzle", // Where our migrations will be outputted
  driver: "pg", // PostgreSQL driver
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;