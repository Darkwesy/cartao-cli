import { Command } from 'commander';
const commander = new Command();
commander
  .option('--si', 'Incluir sessionId')  
  .option('-n --nome <nome>', 'Nome')
  .option('-g --github <github>', 'Github')
  .option('-li --linkedin <linkedin>', 'Linked')
  .option('-s --stacks <stacks>', 'Stacks')
  .option('-t --title <title>', 'Title')
  .option('-tp --title-position <title-position>', 'TitlePosition')
  .option('-ac --accent-color <accent-color>', 'AccentColor')
  .option('-bs --border-style <border-style>', 'BorderStyle')
  .option('-bc --border-color <border-color>', 'BorderColor')
  .option('-m --message <message>', 'Enviar Mensagem')
  .option('-o --output <output>', 'Output')
  .option('-em --email <email>', 'Email')
  .parse(process.argv);

// console.log('DEBUG COMMANDER: ', commander.opts());

export { commander }