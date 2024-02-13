import crypto from 'crypto'
import { commander } from "./utils/commander.js";

export const userData = {
  sessionId: crypto.randomUUID(),
  nome:  commander.opts().nome,
  stacks: commander.opts().stacks,
  github: commander.opts().github,
  linkedin: commander.opts().linkedin,
  title: commander.opts().title,
  titlePosition: commander.opts().titlePosition,
  accentColor: commander.opts().accentColor,
  borderStyle: commander.opts().borderStyle,
  borderColor: commander.opts().borderColor
}