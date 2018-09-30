import * as React from 'react';
import { FaTimes, FaUndo } from 'react-icons/fa';
import { connect } from 'react-redux'
import { Button, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Nav, Navbar, NavbarBrand, NavItem, Row } from 'reactstrap';
import { AnyAction, Dispatch } from 'redux';
import { ActionCreators } from 'redux-undo';

import FearDeck from './FearDeck';
import FearPool from './FearPool';
import { IRootState } from './redux';
import * as DataActions from './redux/data/actions';
import { Types } from './spirit-island-card-katalog/src/types'

interface IStateProps {
  readonly fearPool: number;
  readonly fearGenerated: number;
  readonly fearDeck: ReadonlyArray<Types.FearCard>;
  readonly fearEarned: ReadonlyArray<Types.FearCard>;
  readonly fearDiscarded: ReadonlyArray<Types.FearCard>;
  readonly gameEnded: boolean;
  readonly undoDisabled: boolean;
}

interface IDispatchProps {
  readonly addFear: (fearToBeAdded: number) => void;
  readonly endGameConfirm: () => void;
  readonly undo: () => void;
}

interface IState {
  endGameModalIsOpen: boolean;
}

class Game extends React.Component<IStateProps & IDispatchProps, IState> {
  constructor(props: IStateProps & IDispatchProps) {
    super(props);
    this.state = {
      endGameModalIsOpen: false
    };
  }

  public render() {
    const { undo, undoDisabled } = this.props;

    return (
      <React.Fragment>
        <Navbar>
          <NavbarBrand />
          <Nav>
            <NavItem>
              <Button onClick={undo} disabled={undoDisabled} outline={true} color='primary'><FaUndo className="align-baseline" /> Undo</Button>
            </NavItem>
            &nbsp;
            <NavItem>
              <Button onClick={this.toggleEndGameModal} outline={true} color='danger'><FaTimes className="align-baseline" /> End Game</Button>
            </NavItem>
          </Nav>
        </Navbar>
        <Container className="p-1">
          <Row>
            <Col>
              <FearDeck {...this.props} />
            </Col>
            <Col>
              <FearPool {...this.props} />
            </Col>
            <Col>
              One of three columns
          </Col>
          </Row>
        </Container>

        <Modal isOpen={this.state.endGameModalIsOpen} toggle={this.toggleEndGameModal}>
          <ModalHeader toggle={this.toggleEndGameModal}>Are you sure you want to end the game?</ModalHeader>
          <ModalBody>
            This will end the current game and all data will be lost.
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.props.endGameConfirm}><FaTimes className="align-baseline" /> End Current Game</Button>
            <Button color="secondary" onClick={this.toggleEndGameModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }

  private readonly toggleEndGameModal = () => {
    this.setState({ endGameModalIsOpen: !this.state.endGameModalIsOpen });
  }
}

const mapStateToProps = (state: IRootState): IStateProps => ({
  fearDeck: state.data.present.fearDeck,
  fearDiscarded: state.data.present.fearDiscarded,
  fearEarned: state.data.present.fearEarned,
  fearGenerated: state.data.present.fearGenerated,
  fearPool: state.data.present.fearPool,
  gameEnded: state.data.present.gameEnded,
  undoDisabled: state.data.past.length === 0
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IDispatchProps => ({
  addFear: (fearToBeAdded: number) => dispatch(DataActions.addFear(fearToBeAdded)),
  endGameConfirm: () => {
    dispatch(ActionCreators.clearHistory());
    dispatch({ type: 'RESET' });
  },
  undo: () => dispatch(ActionCreators.undo())
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
