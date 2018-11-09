const Discord = require("discord.js")
const fs = require("fs")
const db = require("./utils/db.js")
const client = new Discord.Client({
  autoReconnect: true,
  disableEveryone: true
})

require("./utils/utils.js")(client);

const config = require("./config.json")

var cmds = {}
var cooldown = []

client.db = db
client.cmds = cmds
client.config = config
client.cooldown = cooldown

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
  if (message.author.bot) return

  if (message.content.indexOf(client.config.prefix) !== 0) return
  
  var args = message.content.slice(client.config.prefix.length).trim().split(/ +/g)
  message.args = args
  var command = args.shift().toLowerCase()

  if (!cmds[command]) return
  else cmds[command].run(Discord, client, message)
});

client.on("ready", async => {
  init()
});

//db.connect();

client.login(config.token)

client.on('error', console.error)
