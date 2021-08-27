import moxios from 'moxios';
import { getSecretWord } from './';

describe('getSecretWord', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('secretWord is returned', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: 'party',
      });
    });

    const mockSecretWord = jest.fn();
    await getSecretWord(mockSecretWord);
    expect(mockSecretWord).toHaveBeenCalledWith('party');
  });
});
