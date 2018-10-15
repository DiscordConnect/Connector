exports.run = async (Discord, client, message, args, db, config) => {
  if (!message.member.roles.has(config.admin_role)) return
  let uses = parseInt(args[0])
  client.channels.get('493392293743558667').createInvite({ maxUses: uses, unique: true }).then(invite => message.channel.send(invite.url))
}
