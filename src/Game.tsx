import * as React from 'react';
import { FaUndo } from 'react-icons/fa';
import { connect } from 'react-redux'
import { Button, Col, Container, Nav, Navbar, NavItem, Row } from 'reactstrap';
import { AnyAction, Dispatch } from 'redux';
import { ActionCreators } from 'redux-undo';

import FearPool from './FearPool';
import { IRootState } from './redux';
import * as DataActions from './redux/data/actions';

interface IStateProps {
  fearPool: number;
  fearGenerated: number;
  undoDisabled: boolean;
}

interface IDispatchProps {
  addFear: (fearToBeAdded: number) => void;
  undo: () => void;
}

class Game extends React.Component<IStateProps & IDispatchProps> {
  public render() {
    const { undo, undoDisabled } = this.props;

    return (
      <React.Fragment>
        <Navbar color='secondary'>
          <Nav>
            <NavItem>
              <Button onClick={undo} disabled={undoDisabled} color='primary'><FaUndo className="align-middle" />Undo</Button>
            </NavItem>
          </Nav>
        </Navbar>
        <Container className="p-1">
          <Row>
            <Col>
              One of three columns
          </Col>
            <Col>
              <FearPool {...this.props} />
            </Col>
            <Col>
              One of three columns
          </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IRootState): IStateProps => ({
  fearGenerated: state.data.present.fearGenerated,
  fearPool: state.data.present.fearPool,
  undoDisabled: state.data.past.length === 0
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IDispatchProps => ({
  addFear: (fearToBeAdded: number) => dispatch(DataActions.addFear(fearToBeAdded)),
  undo: () => dispatch(ActionCreators.undo())
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
