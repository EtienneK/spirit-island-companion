import { AnyAction, combineReducers, Reducer } from 'redux';
import IDataState from './data/state';
import INewGameFlowState from './newGameFlow/state';
import reducers from './reducers';

export interface IRootState {
  data: IDataState,
  newGameFlow: INewGameFlowState;
}

export const rootReducer: Reducer<IRootState, AnyAction> = combineReducers(reducers);
