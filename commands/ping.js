exports.run = async (Discord, client, message, args) => {
  const msg = await message.channel.send('Pinging...')

  msg.edit(`Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`)
}
