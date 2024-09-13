import read from './reader';

import json from './parser';

export default class GameSavingLoader {

  static async load() {
    try {
      const data = await read();
      const jsonString = await json(data);
      return JSON.parse(jsonString);
    } catch (error) {
      console.error('Возникла ошибка:', error);
    }
  }
}