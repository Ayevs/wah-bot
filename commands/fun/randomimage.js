// randomimage.js
const { SlashCommandBuilder } = require('@discordjs/builders');
const { fetchRandomImage } = require('./imageFetcher');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('randomimage')
    .setDescription('Fetch a random image based on a tag')
    .addStringOption(option =>
      option.setName('tag')
        .setDescription('The tag for the image')
        .setRequired(true)
    ),
  execute: async interaction => {
    const tag = interaction.options.getString('tag');

    if (!tag) {
      await interaction.reply({ content: 'Please provide a tag to fetch a random image!', ephemeral: true });
      return;
    }

    const imageUrl = await fetchRandomImage(tag);

    if (imageUrl) {
      await interaction.reply({ content: `Here's a random image with the tag "${tag}": ${imageUrl}` });
    } else {
      await interaction.reply({ content: `No images found with the tag "${tag}"` });
    }
  },
};
