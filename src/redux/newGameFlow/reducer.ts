import { AnyAction, Reducer } from 'redux';
import { getType } from 'typesafe-actions';
import * as Actions from './actions';
import INewGameFlowState from './state';

const newGameFlow: Reducer<INewGameFlowState, AnyAction> =
  (
    state = {
      modalIsOpen: false
    },
    action
  ) => {
    switch (action.type) {
      case getType(Actions.toggleModal):
        return { ...state, modalIsOpen: !state.modalIsOpen };
    }
    return state;
  };

export default newGameFlow;
