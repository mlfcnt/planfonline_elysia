
import { serial, text, pgTable, integer, timestamp, time,  } from "drizzle-orm/pg-core";
import { createInsertSchema } from 'drizzle-typebox';


export const Users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
});

export const Dates = pgTable('dates', {
    id: serial('id').primaryKey(),
    arrival: timestamp("arrival", {
        mode: "date"
    }).notNull(),
    departure: timestamp('departure', {
        mode: "date"
    }).notNull(),
    userId: integer('user_id').references(()=> Users.id).notNull()
})

// Schema for inserting a user - can be used to validate API requests
export const insertDateSchema = createInsertSchema(Dates);