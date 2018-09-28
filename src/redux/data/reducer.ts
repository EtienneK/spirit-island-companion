import { AnyAction, Reducer } from 'redux';
import { getType } from 'typesafe-actions';
import * as Actions from './actions';
import IDataState from './state';

const newGameFlow: Reducer<IDataState, AnyAction> =
  (
    state = {
      numberOfPlayers: undefined
    },
    action
  ) => {
    switch (action.type) {
      case getType(Actions.selectNumberOfPlayers):
        return { ...state, numberOfPlayers: action.payload };
    }
    return state;
  };

export default newGameFlow;
