exports.run = async (Discord, client, message, args, db, config, cooldown) => {
  if (!message.member.roles.has(config.admin_role)) return

  message.channel.send("Rebooting...")
  setTimeout(function () { process.exit(1) }, 500)
}
