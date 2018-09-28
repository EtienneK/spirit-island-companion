import { AnyAction, combineReducers, Reducer } from 'redux';
import INewGameFlowState from './newGameFlow/state';
import reducers from './reducers';

export interface IRootState {
  newGameFlow: INewGameFlowState;
}

export const rootReducer: Reducer<IRootState, AnyAction> = combineReducers(reducers);
