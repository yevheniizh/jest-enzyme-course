/* eslint-disable import/no-anonymous-default-export */

import { actionTypes } from '../actions';

/**
 * @function guessedWordReducer
 * @param {array} state - Array of guessed words.
 * @param {object} action - action to be reduced.
 * @returns {array} - new guessedWord state.
 */
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
};
