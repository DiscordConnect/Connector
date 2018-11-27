CREATE TABLE IF NOT EXISTS "reports" (
	"id" INT NOT NULL DEFAULT '1',
	"reporter" TEXT,
	"category" TEXT,
	"reason" TEXT,
	"channelID" TEXT,
	"messageID" TEXT,
	"reportedUsers" TEXT[],
	"confirmations" TEXT[],
	CONSTRAINT reports_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);
