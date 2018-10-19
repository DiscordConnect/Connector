exports.run = async (Discord, client, message, args) => {
  message.channel.send
    (`\`${client.config.prefix}report\` - Create a new report.` +
    `\n\`${client.config.prefix}edit\` - Edit an existing report.` + 
    `\n\`${client.config.prefix}lookup\` - Lookup a user by their ID or mention.` +
    `\n\`${client.config.prefix}confirm\` - Confirm an existing report.` +
    `\n\`${client.config.prefix}help\` - This message, that you're reading, right now.`)
};
