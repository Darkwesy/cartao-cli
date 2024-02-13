import boxen from 'boxen';
import { Chalk } from 'chalk';

class CardService {
  static generateCard(userData) {
   
    const customChalk = new Chalk({ level: 3 });
    
    const indices = {
      sessionId: customChalk.hex(userData.accentColor)("sessionId:"),
      nome: customChalk.hex(userData.accentColor)("nome:"),
      github: customChalk.hex(userData.accentColor)("github:"),
      linkedin: customChalk.hex(userData.accentColor)("linkedin:"),
      stacks: customChalk.hex(userData.accentColor)("stacks:"),
      message: customChalk.hex(userData.accentColor)("message:")
    };

    let content = '';

    Object.keys(indices).forEach(field => {
      if (userData[field]) {
        content += `${indices[field]} ${userData[field]}\n`;
      }
    });
    
    const boxenOptions = {
      padding: 0.5,
      borderStyle: userData.borderStyle || 'bold',
      title: userData.title ? customChalk.whiteBright(userData.title) : undefined,
      titleAlignment: userData.titlePosition || 'center',
      borderColor: userData.borderColor || userData.accentColor || 'green',
    };

    return boxen(content.trim(), boxenOptions);
  }
}

export { CardService };
