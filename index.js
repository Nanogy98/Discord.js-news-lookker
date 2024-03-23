client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  if (interaction.commandName === "news") {
    const fetch = require("node-fetch");
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${process.env.news}`
    )
      .then((res) => res.json())
      .catch(() => {});
    await interaction.reply({
      embeds: [
        {
          color: "BLUE",
          timestamp: new Date(),
          fields: [
            {
              name: data.articles[0].title,
              value: data.articles[0].url + "\n" + data.articles[0].description,
            },
            {
              name: data.articles[1].title,
              value: data.articles[1].url + "\n" + data.articles[1].description,
            },
            {
              name: data.articles[2].title,
              value: data.articles[2].url + "\n" + data.articles[2].description,
            },
          ],
        },
      ],
    });
  }
})
