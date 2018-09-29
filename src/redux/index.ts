import { AnyAction, combineReducers, Reducer } from 'redux';
import { StateWithHistory } from 'redux-undo';
import IDataState from './data/state';
import INewGameFlowState from './newGameFlow/state';
import reducers from './reducers';

export interface IRootState {
  data: StateWithHistory<IDataState>,
  newGameFlow: INewGameFlowState;
}

export const rootReducer: Reducer<IRootState, AnyAction> = combineReducers(reducers);
