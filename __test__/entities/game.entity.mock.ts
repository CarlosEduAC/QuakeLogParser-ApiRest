import fs from 'fs';

const LINE_COMMAND = /^.{0,7}([a-z A-Z][^:]*)/;

const data = fs.readFileSync('./__test__/entities/game.mock.log', 'utf-8');

const logs = data.split(/\r?\n/);

export const GAME_LOG_MOCK = logs.map(log => log.match(LINE_COMMAND));

export const GAME_MOCK = {
  totalKills: 11,
  players: ['Isgalamido', 'Dono da Bola', 'Mocinha'],
  kills: {
    'Dono da Bola': 0,
    Isgalamido: -7,
    Mocinha: 0,
  },
};
