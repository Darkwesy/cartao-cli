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