import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import App from './App';
import './index.css';
import { rootReducer } from './redux';
import registerServiceWorker from './registerServiceWorker';

const persistConfig = {
  key: 'root',
  storage,
}

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
