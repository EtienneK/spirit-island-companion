import { Action, AnyAction, Reducer } from "redux";
import * as Actions from './actions';

export interface IRootState {
  playerNumberSelectModalIsOpen: boolean;
}

const initialState: IRootState = {
  playerNumberSelectModalIsOpen: false
};

export const rootReducer: Reducer<IRootState, AnyAction> =
  (state = initialState, action: Action<any>) => {
    switch (action.type) {
      case Actions.TOGGLE_PLAYER_NUMBER_SELECT_MODAL:
        return { ...state, playerNumberSelectModalIsOpen: !state.playerNumberSelectModalIsOpen };
    }

    return state;
  };
