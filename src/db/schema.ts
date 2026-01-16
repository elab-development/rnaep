import { integer, pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: uuid().primaryKey().defaultRandom(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 100 }).notNull().unique(),
    passHash: varchar("pass_hash", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").defaultNow()
});
