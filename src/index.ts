import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors'
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { Users } from "./schema";


const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, {
  schema: {
    users: Users
  }
});


const app = new Elysia().use(cors()).get("/", () => ({
  hello: "world"
})).get('/users', async () => db.select().from(Users)).listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
