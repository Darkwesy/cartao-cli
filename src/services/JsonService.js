import fs from 'fs';

class JsonService {
  static generateJson(userData, filename = 'card.json') {
    
    const sessionId = userData.sessionId ? userData.sessionId : null;
    
    const jsonContent = {
      sessionId: userData.sessionId,
      nome: userData.nome,
      github: userData.github,
      linkedin: userData.linkedin,
      stacks: userData.stacks,
      message: userData.message
    };

    const jsonString = JSON.stringify(jsonContent, null, 2);

    fs.writeFile(filename, jsonString, err => {
      if (err) {
        console.error('Erro ao escrever o arquivo JSON:', err);
      } else {
        console.log('Arquivo JSON foi criado com sucesso:', filename);
      }
    });
  }
}

export { JsonService };