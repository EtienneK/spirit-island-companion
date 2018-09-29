import * as React from 'react';
import { FaGithub, FaHeart } from 'react-icons/fa';
import { connect } from 'react-redux'
import { Button, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { AnyAction, Dispatch } from 'redux';

import { IRootState } from './redux';
import * as DataActions from './redux/data/actions';
import * as NewGameFlowActions from './redux/newGameFlow/actions';

// import './spirit-island-card-katalog/src/types';
// tslint:disable-next-line
// import { DB } from './spirit-island-card-katalog/src/db';

interface IStateProps {
  modalIsOpen: boolean;
  playerNumberSelected?: number;
}

interface IDispatchProps {
  selectNumberOfPlayers: (numberOfPlayers: number) => void;
  startGame: () => void;
  toggleModal: () => void;
}

class Home extends React.Component<IStateProps & IDispatchProps> {
  public render() {
    return (
      <div className="container text-center">
        <img style={{ marginTop: '20px' }} src="images/Spirit-Island-Logo.png" className="img-fluid" alt="Spirit Island" />
        <h1 style={{ marginTop: '-20px' }}>Companion App</h1>
        <Button
          onClick={this.props.toggleModal}
          style={{ padding: '30px', margin: '30px' }}
          color="primary"
          size="lg"
        >
          Create New Game
        </Button>
        <Modal isOpen={this.props.modalIsOpen} toggle={this.props.toggleModal}>
          <ModalHeader toggle={this.props.toggleModal}>Create new game</ModalHeader>
          <ModalBody>
            <h5>How many players?</h5>
            <ListGroup>
              <ListGroupItem active={this.playerNumberIsActive(1)} onClick={this.selectNumberOfPlayers(1)} tag="button" action={true}>1 player</ListGroupItem>
              <ListGroupItem active={this.playerNumberIsActive(2)} onClick={this.selectNumberOfPlayers(2)} tag="button" action={true}>2 Players</ListGroupItem>
              <ListGroupItem active={this.playerNumberIsActive(3)} onClick={this.selectNumberOfPlayers(3)} tag="button" action={true}>3 players</ListGroupItem>
              <ListGroupItem active={this.playerNumberIsActive(4)} onClick={this.selectNumberOfPlayers(4)} tag="button" action={true}>4 players</ListGroupItem>
              <ListGroupItem active={this.playerNumberIsActive(5)} onClick={this.selectNumberOfPlayers(5)} tag="button" action={true}>5 players</ListGroupItem>
              <ListGroupItem active={this.playerNumberIsActive(6)} onClick={this.selectNumberOfPlayers(6)} tag="button" action={true}>6 players</ListGroupItem>
            </ListGroup>
            <h5 style={{ marginTop: '20px' }}>Which expansions?</h5>
            <em>Only the base game is supported at this moment. Expansion support is coming soon...</em>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" disabled={!this.props.playerNumberSelected} onClick={this.createGame}>Create</Button>
            <Button color="secondary" onClick={this.props.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <footer>
          <hr />
          <div className="text-muted">
            <p>
              <small><a href="#"><FaGithub className="align-baseline" /> Fork me on Github</a></small>
            </p>
            <p>
              <small><a href="http://www.etiennek.com">Made with <FaHeart className="align-middle" /> by Etienne Koekemoer</a></small>
            </p>

            <p style={{ marginTop: '20px' }}>
              <small>
                "Spirit Island Companion App" is an unofficial web application and is
                not affiliated with Greater Than Games, LLC in any way.
                Spirit Island art, text and other assets belong to Greater Than Games, LLC.
              </small>
            </p>
          </div>
        </footer>
      </div>
    );
  }

  private readonly createGame = () => {
    this.props.startGame();
    this.props.toggleModal();
  };

  private readonly playerNumberIsActive = (playerNumber: number) =>
    this.props.playerNumberSelected === playerNumber;
  private readonly selectNumberOfPlayers = (numberOfPlayers: number) =>
    () => this.props.selectNumberOfPlayers(numberOfPlayers);

}

const mapStateToProps = (state: IRootState): IStateProps => ({
  modalIsOpen: state.newGameFlow.modalIsOpen,
  playerNumberSelected: state.data.numberOfPlayers
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IDispatchProps => ({
  selectNumberOfPlayers: (numberOfPlayers) => dispatch(DataActions.selectNumberOfPlayers(numberOfPlayers)),
  startGame: () => dispatch(DataActions.toggleGameStart()),
  toggleModal: () => dispatch(NewGameFlowActions.toggleModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
