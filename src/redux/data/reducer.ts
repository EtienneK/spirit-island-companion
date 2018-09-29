import { AnyAction, Reducer } from 'redux';
import undoable from 'redux-undo';
import { getType } from 'typesafe-actions';
import * as Actions from './actions';
import IDataState from './state';

function getStartingFear(numberOfPlayers: number) {
  return numberOfPlayers * 4;
}

const newGameFlow: Reducer<IDataState, AnyAction> =
  (
    state = {
      fearGenerated: 0,
      fearPool: 0,
      gameStarted: false,
      numberOfPlayers: undefined,
    },
    action
  ) => {
    switch (action.type) {
      case getType(Actions.addFear):
        const amount: number = action.payload;
        let { fearGenerated, fearPool } = state;
        const startingFear = getStartingFear(state.numberOfPlayers!);

        for (let i = 0; i < amount; ++i) {
          fearPool--;
          fearGenerated++;
          if (fearPool === 0) {
            fearPool = startingFear;
            fearGenerated = 0;
            // TODO: Add Fear Card
          }
        }

        return {
          ...state,
          fearGenerated,
          fearPool
        };
      case getType(Actions.selectNumberOfPlayers):
        return { ...state, numberOfPlayers: action.payload };
      case getType(Actions.toggleGameStart):
        return {
          ...state,
          fearPool: getStartingFear(state.numberOfPlayers!),
          gameStarted: !state.gameStarted
        };
    }
    return state;
  };

export default undoable(newGameFlow);
