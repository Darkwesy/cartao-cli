import boxen from 'boxen';
import { Chalk } from 'chalk';
import { userData } from './dados.js';

const customChalk = new Chalk({ level: 3 });

const indices = {
  sessionId: customChalk.hex(userData.accentColor)("sessionId:"),
  nome: customChalk.hex(userData.accentColor)("nome:"),
  github: customChalk.hex(userData.accentColor)("github:"),
  linkedin: customChalk.hex(userData.accentColor)("linkedin:"),
  stacks: customChalk.hex(userData.accentColor)("stacks:")
}

const fields = ['sessionId', 'nome', 'github', 'linkedin', 'stacks'];

let cardContent = '';

Object.keys(indices).forEach(field => {
  if (userData[field]) {
    cardContent += `${indices[field]} ${userData[field]}\n`;
  }
});

cardContent += `${customChalk.hex(userData.accentColor)("message:")} Obrigado por acessar o meu cartão digital!`

const boxenOptions = {
  padding: 0.5,
  borderStyle: 'bold',
  titleAlignment: userData.titlePosition || 'center',
  borderColor: userData.borderColor || userData.accentColor || 'green',
}

if (userData.title) {
  boxenOptions.title = customChalk.whiteBright(userData.title);
}

console.log(boxen(cardContent.trim(), boxenOptions));
