exports.run = async (Discord, client, message, args) => {
  if (!message.member.roles.has(client.config.admin_role)) return
  let uses = parseInt(args[0])
  client.channels.get('493392293743558667').createInvite({ maxUses: uses, unique: true }).then(invite => message.channel.send(invite.url))
}
