import * as React from 'react';
import './App.css';
import './spirit-island-card-katalog/src/types';
// tslint:disable-next-line
import { DB } from './spirit-island-card-katalog/src/db';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {DB.CARDS[0].name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
