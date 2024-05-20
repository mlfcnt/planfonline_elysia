CREATE TABLE IF NOT EXISTS "dates2" (
	"id" serial PRIMARY KEY NOT NULL,
	"arrival" timestamp NOT NULL,
	"departure" timestamp NOT NULL,
	"user_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users2" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
DROP TABLE "dates";--> statement-breakpoint
DROP TABLE "users";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dates2" ADD CONSTRAINT "dates2_user_id_users2_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users2"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
