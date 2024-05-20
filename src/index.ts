import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { Users } from "./schema";
import { initializeRoutes } from "./routes";


const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, {
  schema: {
    users: Users
  }
});

const app = new Elysia().use(cors());
const routes = initializeRoutes(app)
app.use(routes)
app.listen(8080);


console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
``