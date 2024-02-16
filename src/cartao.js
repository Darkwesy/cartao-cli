import { JsonService } from './services/JsonService.js';
import { User } from './models/User.js';
import { commander } from './config/commander.js';
import { CardService } from './services/CardService.js';

const userData = new User(commander.opts());

if (userData.output == 'json') {
  JsonService.generateJson(userData);
} else if (userData.output == 'cli') {
  const card = CardService.generateCard(userData);
  console.log(card);
}

// Scrit para teste
// node src/cartao --si -n "Marcos Vinicius" -g "@marcosvcsantos" -li "@marcosvcsantos" -s "C, PHP, Node, JavaScript, MySQL" -t "Marcos Vinicius" -tp "right" -ac "#325aa8" -bs "round" -m "Olá, este é o meu cartão digital." -o "cli"