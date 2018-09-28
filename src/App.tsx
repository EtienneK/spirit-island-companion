import * as React from 'react';
import { FaGithub, FaHeart } from 'react-icons/fa';
import { connect } from 'react-redux'
import { Button, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { AnyAction, Dispatch } from 'redux';

import { IRootState } from './redux';
import * as NewGameFlowActions from './redux/newGameFlow/actions';

import './spirit-island-card-katalog/src/types';
// tslint:disable-next-line
// import { DB } from './spirit-island-card-katalog/src/db';

interface IStateProps {
  modalIsOpen: boolean;
}

interface IDispatchProps {
  toggleModal: () => void;
}

class App extends React.Component<IStateProps & IDispatchProps> {
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
          <ModalHeader toggle={this.props.toggleModal}>How many players?</ModalHeader>
          <ModalBody>
            <ListGroup>
              <ListGroupItem tag="button" action={true}>1 player</ListGroupItem>
              <ListGroupItem tag="button" action={true}>2 Players</ListGroupItem>
              <ListGroupItem tag="button" action={true}>3 players</ListGroupItem>
              <ListGroupItem tag="button" action={true}>4 players</ListGroupItem>
              <ListGroupItem tag="button" action={true}>5 players</ListGroupItem>
              <ListGroupItem tag="button" action={true}>6 players</ListGroupItem>
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" disabled={true} onClick={this.props.toggleModal}>Create New Game</Button>
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
}

const mapStateToProps = (state: IRootState): IStateProps => ({
  modalIsOpen: state.newGameFlow.modalIsOpen
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IDispatchProps => ({
  toggleModal: () => dispatch(NewGameFlowActions.toggleModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
