import * as React from 'react';
import { Button, Progress } from 'reactstrap';

import * as fearImage from './spirit-island-card-katalog/imgs/symbols/fear.jpg';

interface IProps {
  readonly fearPool: number;
  readonly fearGenerated: number;
  readonly gameEnded: boolean;
  readonly addFear: (fearToBeAdded: number) => void;
}

export default class FearPool extends React.Component<IProps> {
  public render() {
    const { fearPool, fearGenerated, gameEnded } = this.props;
    return (
      <div className="card p-1">
        <div className="text-center"><img width={40} height={40} src={fearImage} /></div>
        <div className="p-1">
          <h5>Fear Pool</h5>
          <div style={{ fontSize: '1.5em' }} className="text-center">{fearPool}</div>
          <Progress color='danger' value={(fearPool / (fearPool + fearGenerated)) * 100} />
        </div>

        <div style={{ marginTop: '10px' }} className="p-1">
          <h5>Generated Fear</h5>
          <div style={{ fontSize: '1.5em' }} className="text-center">{fearGenerated}</div>
          <Progress color='primary' value={(fearGenerated / (fearPool + fearGenerated)) * 100} />
        </div>

        <Button disabled={gameEnded} color='primary' outline={true} style={{ marginTop: '10px' }} size="lg" onClick={this.addFear(1)}>
          Generate Fear
        </Button>
      </div>
    );
  }

  private readonly addFear = (amount: number) => {
    const { addFear } = this.props;
    return () => addFear(amount);
  }

}
