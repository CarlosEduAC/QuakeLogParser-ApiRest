import fs from 'fs';

import QuakeLogParserService from '../../src/services/quakeLogParser.service';
import {
  PARSER_RESPONSE_MOCK,
  PARSER_ERROR_2_MOCK,
  PARSER_ERROR_MOCK,
} from './quakeLogParser.service.mock';

describe('Quake Log Parser Service', () => {
  it('should be able to parse without error', () => {
    const quakeLogParserService = new QuakeLogParserService(
      './src/data/games.log',
    );

    quakeLogParserService.execute();

    const data = fs.readFileSync('./src/data/response.json', 'utf-8');

    const games = JSON.parse(data);

    expect(games).toEqual(PARSER_RESPONSE_MOCK);
  });

  it('should not be able to parse with error in creating response.json', () => {
    try {
      const quakeLogParserService = new QuakeLogParserService(
        './src/data/games.log',
      );

      quakeLogParserService.execute();

      const data = fs.readFileSync('./src/data/response2.json', 'utf-8');

      const games = JSON.parse(data);

      expect(games).toEqual(PARSER_RESPONSE_MOCK);
    } catch (err) {
      expect(err.message).toEqual(PARSER_ERROR_MOCK);
    }
  });
});
