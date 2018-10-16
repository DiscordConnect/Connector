const Discord = require("discord.js")
const fs = require("fs")
const sqlite3 = require("sqlite3")

const client = new Discord.Client({
  autoReconnect: true,
  disableEveryone: true
})
const db = new sqlite3.Database("reports.db")
const config = require("./config.json")

var cmds = {}
var cooldown = []

client.cmds = cmds
client.config = config
client.db = db
client.cooldown = cooldown

db.run(
  "CREATE TABLE IF NOT EXISTS `reports` (               \
	`report_id`	INTEGER PRIMARY KEY AUTOINCREMENT,        \
	`reporter` TEXT NOT NULL,                             \
	`category` TEXT NOT NULL,                             \
	`reason` TEXT NOT NULL,                               \
	`channel_id` TEXT,                                    \
	`message_id` TEXT,                                    \
	`confirmations`	TEXT NOT NULL );"
);

db.run(
  "CREATE TABLE IF NOT EXISTS `reported_users` (        \
  `reported_user` TEXT NOT NULL,                        \
  `report_id`	INTEGER UNIQUE,                           \
	`channel_id`	TEXT,                                   \
	`message_id` TEXT );"
);

const init = async () => {
  console.log(client.user.tag + ' Connected!');

  await fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err)
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      cmds[file.split(".")[0]] = require(`./commands/${file}`)
      console.log(`Loaded: ${file}`)
    });
  });
};

client.on("message", async message => {
  if (!message.content.startsWith(config.prefix)) return

  var args = message.content.substring(config.prefix.length).split(/ +/g)
  var command = args[0].toLowerCase()
  args.shift();

  if (!cmds[command]) return
  else cmds[command].run(Discord, client, message, args)
});

client.on("ready", async => {
  init()
});

client.login(config.token)

client.on('error', console.error)
