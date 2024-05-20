import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { Logestic } from "logestic";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { Dates, Users } from "./schema";
import { initializeRoutes } from "./routes";

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, {
  schema: {
    users: Users,
    dates: Dates,
  },
});

const app = new Elysia().use(cors()).use(Logestic.preset("fancy"));
const routes = initializeRoutes(app);
app.use(routes);
app.listen(8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
``;
