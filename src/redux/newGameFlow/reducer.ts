import { AnyAction, Reducer } from 'redux';
import { getType } from 'typesafe-actions';
import * as Actions from './actions';
import INewGameFlowState from './state';

const initialState: INewGameFlowState = {
  modalIsOpen: false
};

const newGameFlow: Reducer<INewGameFlowState, AnyAction> = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET':
      return initialState;
    case getType(Actions.toggleModal):
      return { ...state, modalIsOpen: !state.modalIsOpen };
  }
  return state;
};

export default newGameFlow;
