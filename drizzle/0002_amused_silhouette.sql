CREATE TABLE IF NOT EXISTS "dates" (
	"id" serial PRIMARY KEY NOT NULL,
	"arrival" time,
	"departure" time,
	"user_id" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "dates" ADD CONSTRAINT "dates_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
