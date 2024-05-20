const Discord = require('discord.js')
const client = new Discord.Client()

// Подключение к API Discord
client.login("MTAyMjE2OTQwMTMzNzg0NzgxOA.GLPcH3.sbR7TNpPXZ5HNc41v_dKZJitWvr6J2Cc9MX8xo"); // Замените YOUR_DISCORD_API_TOKEN на ваш токен авторизации API Discord

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);

  // Получение информации о пользователе
  const user = client.user;
  const username = user.username;
  const avatarURL = user.displayAvatarURL();

  // Отображение информации на странице HTML
  document.getElementById("username").textContent = username;
  document.getElementById("avatar").src = avatarURL;

  console.log(`${user} ${username} ${avatarURL}`);
});