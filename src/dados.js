import crypto from 'crypto'
import { commander } from "./config/commander.js";
const sessionId = crypto.randomUUID();

export const userData = {
  sessionId: sessionId,
  nome:  commander.opts().nome,
  stacks: commander.opts().stacks,
  github: commander.opts().github,
  linkedin: commander.opts().linkedin,
  title: commander.opts().title,
  titlePosition: commander.opts().titlePosition,
  accentColor: commander.opts().accentColor,
  borderStyle: commander.opts().borderStyle,
  borderColor: commander.opts().borderColor,
  output: commander.opts().output
}