import * as React from 'react';
import { FaGithub, FaHeart } from 'react-icons/fa';
import { Button, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import './spirit-island-card-katalog/src/types';
// tslint:disable-next-line
// import { DB } from './spirit-island-card-katalog/src/db';

interface IState {
  modalIsOpen: boolean;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  public render() {
    return (
      <div className="container text-center">
        <img style={{ marginTop: '20px' }} src="images/Spirit-Island-Logo.png" className="img-fluid" alt="Spirit Island" />
        <h1 style={{ marginTop: '-20px' }}>Companion App</h1>
        <Button
          onClick={this.toggleModal}
          style={{ padding: '30px', margin: '30px' }}
          color="primary"
          size="lg"
        >
          Create New Game
        </Button>
        <Modal isOpen={this.state.modalIsOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>How many players?</ModalHeader>
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
            <Button color="primary" disabled={true} onClick={this.toggleModal}>Create New Game</Button>
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
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

  public toggleModal = () => this.setState({ modalIsOpen: !this.state.modalIsOpen });
}

export default App;
