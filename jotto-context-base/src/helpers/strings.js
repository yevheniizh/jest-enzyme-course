const languageStrings = {
  en: {
    consgrats: 'Congratulations! You guessed the word',
    submit: 'Submit',
    guessPrompt: 'Try to guess the secret word!',
    guessInputPlaceholder: 'enter guess',
    guessColumnHeader: 'Guessed Words',
    guessWords: 'Guesses',
    matchingLettersHeaderColumn: 'Matching Letters',
  },
  emoji: {
    consgrats: '🎯 🎉',
    submit: '🚀',
    guessPrompt: '🤔🤫🔤',
    guessInputPlaceholder: '⌨️🤔',
    guessColumnHeader: '🤷‍♀️🔤',
    guessWords: '🤷‍♀️',
    matchingLettersHeaderColumn: '✅',
  },
};

function getStringByLanguage(
  languageCode,
  stringKey,
  strings = languageStrings
) {
  if (!strings[languageCode] || !strings[languageCode][stringKey]) {
    console.warn(`Could not get string [${stringKey}] for [${languageCode}]`);

    return strings.en[stringKey];
  }

  return strings[languageCode][stringKey];
}

// mocking
export default {
  getStringByLanguage,
};
