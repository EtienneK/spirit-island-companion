import { AnyAction, combineReducers, Reducer } from "redux";
import * as Actions from './actions';

interface INewGameFlowState {
  modalIsOpen: boolean;
}

export interface IRootState {
  newGameFlow: INewGameFlowState;
}

const newGameFlow: Reducer<INewGameFlowState, AnyAction> =
  (
    state = {
      modalIsOpen: false
    },
    action: AnyAction
  ) => {
    switch (action.type) {
      case Actions.TOGGLE_PLAYER_NUMBER_SELECT_MODAL:
        return { ...state, modalIsOpen: !state.modalIsOpen };
    }
    return state;
  };

export const rootReducer: Reducer<IRootState, AnyAction> = combineReducers({
  newGameFlow
});
