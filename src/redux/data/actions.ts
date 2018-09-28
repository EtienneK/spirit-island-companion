import { createStandardAction } from 'typesafe-actions';

export const selectNumberOfPlayers = createStandardAction('data/SELECT_NUMBER_OF_PLAYERS')<number>();
