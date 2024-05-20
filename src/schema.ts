
import { serial, text, pgTable, time, integer } from "drizzle-orm/pg-core";

export const Users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
});

export const Dates = pgTable('dates', {
    id: serial('id').primaryKey(),
    arrival: time('arrival').notNull(),
    departure: time('departure').notNull(),
    userId: integer('user_id').references(()=> Users.id).notNull()
})