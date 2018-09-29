import * as React from 'react';
import { connect } from 'react-redux'
import { Col, Container, Row } from 'reactstrap';
import { AnyAction, Dispatch } from 'redux';

import FearPool from './FearPool';
import { IRootState } from './redux';
import * as DataActions from './redux/data/actions';

interface IStateProps {
  fearPool: number;
  fearGenerated: number;
}

interface IDispatchProps {
  addFear: () => void;
}

class Game extends React.Component<IStateProps & IDispatchProps> {
  public render() {
    return (
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
    );
  }
}

const mapStateToProps = (state: IRootState): IStateProps => ({
  fearGenerated: state.data.fearGenerated,
  fearPool: state.data.fearPool
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IDispatchProps => ({
  addFear: () => dispatch(DataActions.addFear())
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
