import { createStandardAction } from 'typesafe-actions';

export const addFear = createStandardAction('data/ADD_FEAR')<number>();

export const endGame = createStandardAction('data/END_GAME')<void>();

export const selectNumberOfPlayers = createStandardAction('data/SELECT_NUMBER_OF_PLAYERS')<number>();
export const toggleGameStart = createStandardAction('data/TOGGLE_GAME_START')<void>();
