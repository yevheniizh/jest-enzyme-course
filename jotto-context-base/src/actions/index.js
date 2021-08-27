import axios from 'axios';

export const getSecretWord = async (setSecretWord) => {
  // TODO: write actual action in Redux / context sections
  const response = await axios.get('http://localhost:3030');
  setSecretWord(response.data);
};
