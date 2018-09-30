import { createStandardAction } from 'typesafe-actions';
import { IInitGame } from './models';

export const addFear = createStandardAction('data/ADD_FEAR')<number>();

export const endGame = createStandardAction('data/END_GAME')<void>();

export const initGame = createStandardAction('data/INIT_GAME')<IInitGame>();

export const selectNumberOfPlayers = createStandardAction('data/SELECT_NUMBER_OF_PLAYERS')<number>();
export const toggleGameStart = createStandardAction('data/TOGGLE_GAME_START')<void>();
