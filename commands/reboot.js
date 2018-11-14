exports.run = async (Discord, client, message, args) => {
  if (!message.member.roles.has(client.config.admin_role)) return

  message.channel.send("Disconnecting... 👋").then(msg => {
    //Just gonna take out the msg variable with us here, I guess.
    process.exit()
  })
}
