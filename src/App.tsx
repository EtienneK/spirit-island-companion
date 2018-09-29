import * as React from 'react';
import { connect } from 'react-redux'
import { IRootState } from './redux';

import Game from './Game';
import Home from './Home';

// tslint:disable-next-line
// import { DB } from './spirit-island-card-katalog/src/db';

interface IStateProps {
  gameStarted: boolean;
}

class App extends React.Component<IStateProps> {
  public render() {
    const { gameStarted } = this.props;
    return (
      <React.Fragment>
        {
          !gameStarted ?
            <Home />
            :
            <Game />
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IRootState): IStateProps => ({
  gameStarted: state.data.gameStarted
});

export default connect(mapStateToProps)(App);
