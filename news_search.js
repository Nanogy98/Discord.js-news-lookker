  data: {
    name: "newssearch",
    description: "ニュースを検索します。",
    options: [
      {
        type: "STRING",
        name: "word",
        description: "入力しよう",
        max_length: 90,
        required: true,
      },
    ],
  }, 

try {
     const word = interaction.options.getString("word");
     const data = await fetch(`https://newsapi.org/v2/everything?q=${word}&apiKey=${process.env.news}`).then((res) => res.json()).catch(() => {});
     const embed = new Discord.MessageEmbed().addFields([{
       name: data.articles[0].title,
       value: data.articles[0].url + "\n" + data.articles[0].description
     }, {
       name: data.articles[1].title,
       value: data.articles[0].url + "\n" + data.articles[1].description
     }, {
       name: data.articles[2].title,
       value: data.articles[0].url + "\n" + data.articles[3].description
     }, ]).setColor("BLUE");
     await interaction.reply({
       embeds: [embed]
     });
   } catch (err) {
     await interaction.reply({
       content: "検索中にエラーが発生しました",
       ephemeral: true,
     });
   }
