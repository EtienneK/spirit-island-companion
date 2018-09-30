import { AnyAction, Reducer } from 'redux';
import undoable from 'redux-undo';
import { getType } from 'typesafe-actions';
import * as _ from 'underscore';

import { Types } from '../../spirit-island-card-katalog/src/types';
import * as Actions from './actions';
import { IInitGame } from './models';
import IDataState from './state';

const initialState: IDataState = {
  fearDeck: [],
  fearDiscarded: [],
  fearEarned: [],
  fearGenerated: 0,
  fearPool: 0,
  gameEnded: false,
  gameStarted: false,
  numberOfPlayers: undefined,
  sets: new Set([Types.ProductSet.Basegame])
};

function getStartingFear(numberOfPlayers: number) {
  return numberOfPlayers * 4;
}

const newGameFlow: Reducer<IDataState, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET': {
      return initialState;
    }

    case getType(Actions.initGame): {
      const { fearDeck } = action.payload as IInitGame;
      return { ...state, fearDeck };
    }

    case getType(Actions.endGame): {
      return { ...state, gameEnded: true };
    }

    case getType(Actions.addFear): {
      const amount: number = action.payload;
      let { fearDeck, fearEarned, fearGenerated, fearPool, gameEnded } = state;
      const startingFear = getStartingFear(state.numberOfPlayers!);

      for (let i = 0; i < amount; ++i) {
        fearPool--;
        fearGenerated++;
        if (fearPool === 0) {
          fearPool = startingFear;
          fearGenerated = 0;
          // Add a fear card to earned fear
          fearEarned = [...fearEarned, fearDeck[0]];
          fearDeck = _.last(state.fearDeck, state.fearDeck.length - 1);
          if (fearDeck.length === 0) {
            gameEnded = true;
            break;
          }
        }
      }

      return {
        ...state,
        fearDeck,
        fearEarned,
        fearGenerated,
        fearPool,
        gameEnded
      };
    }

    case getType(Actions.selectNumberOfPlayers): {
      return { ...state, numberOfPlayers: action.payload };
    }

    case getType(Actions.toggleGameStart): {
      return {
        ...state,
        fearPool: getStartingFear(state.numberOfPlayers!),
        gameStarted: !state.gameStarted
      };
    }
  }
  return state;
};

export default undoable(newGameFlow);
