import GameSavingLoader from '../loader';

jest.mock('../reader', () => () => Promise.reject(new Error('Test Error')));

test('GameSavingLoader.load logs error', async () => {
  console.error = jest.fn(); // Мокаем `console.error`

  await GameSavingLoader.load();

  expect(console.error).toHaveBeenCalledWith('Возникла ошибка:', new Error('Test Error'));
});
