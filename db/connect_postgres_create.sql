CREATE TABLE IF NOT EXISTS "reports" (
	"id" bigint NOT NULL DEFAULT '1',
	"reporter" bigint,
	"category" TEXT,
	"reason" TEXT,
	"channelID" bigint,
	"messageID" bigint,
	"reportedUsers" bigint[],
	"confirmations" bigint[],
	CONSTRAINT reports_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




