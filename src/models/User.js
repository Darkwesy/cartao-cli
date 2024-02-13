import crypto from 'crypto';

class User {
  constructor({ si ,nome, github, linkedin, stacks, title, titlePosition, accentColor, borderStyle, borderColor, output, message }) {
    this.nome = nome;
    this.github = github;
    this.linkedin = linkedin;
    this.stacks = stacks;
    this.title = title;
    this.titlePosition = titlePosition;
    this.accentColor = accentColor;
    this.borderStyle = borderStyle;
    this.borderColor = borderColor;
    this.output = output;
    this.message = message
    if (si) {
      this.sessionId = crypto.randomUUID();
    }
  }
}

export { User };