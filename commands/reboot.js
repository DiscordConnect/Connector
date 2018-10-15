exports.run = async (Discord, client, message, args, db, config, cooldown) => {
  if (!message.member.roles.has(config.admin_role)) return

  message.channel.send("Re**Connect**ing...").then(msg => {
    //Just gonna take out the msg variable with us here, I guess.
    process.exit()
  })
}
