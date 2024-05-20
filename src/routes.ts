import { Elysia, t } from "elysia";
import { db } from ".";
import { Dates, Users } from "./schema";

export function initializeRoutes(app: Elysia) {
  return app
    .get("/", () => ({
      hello: "world",
    }))
    .get("/users", async () => db.select().from(Users))
    .post("/dates", async ({ body }) => db.insert(Dates).values(body), {
      body: t.Object({
        arrival: t.Date(),
        departure: t.Date(),
        userId: t.Integer(),
      }),
    });
}
