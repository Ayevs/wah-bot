const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sendmsg')
        .setDescription('sends msg to defined user.')
        .addStringOption(option =>
            option.setName('userid')
            .setDescription('user id')
            .setRequired(true))
        .addStringOption(option =>
            option.setName('message')
            .setDescription('message to send')
            .setRequired(true)),
    async execute(interaction) {
        const userId = interaction.options.getString('userid');
        const message = interaction.options.getString('message');

        try {
            const user = await interaction.client.users.fetch(userId);
            if(user) {
                user.send(message);
                await interaction.reply('message sent :3');
            } else {
                await interaction.reply('user not found :c');
            }
        } catch (error) {
            console.error(error);
            await interaction.reply('an error occured while sending msg');
        }
    }
};