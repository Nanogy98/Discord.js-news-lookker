 try {
     const word = interaction.options.getString("word");
     const data = await fetch(`https://newsapi.org/v2/everything?q=${word}&apiKey=5d2e9a391cb44145a42c6a61151512ae`).then((res) => res.json()).catch(() => {});
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
