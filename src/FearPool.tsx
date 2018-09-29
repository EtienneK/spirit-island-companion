import * as React from 'react';
import { Button } from 'reactstrap';

import * as fearImage from './spirit-island-card-katalog/imgs/symbols/fear.jpg';

interface IProps {
  fearPool: number;
  fearGenerated: number;
  addFear: (fearToBeAdded: number) => void;
}

export default class FearPool extends React.Component<IProps> {
  public render() {
    const { fearPool, fearGenerated } = this.props;
    return (
      <div className="card p-1">
        <div className="p-1">
          <h5>Fear Pool <small>({fearPool})</small></h5>
          {this.getFearSymbols(fearPool)}
        </div>

        <div style={{ marginTop: '10px' }} className="p-1">
          <h5>Generated Fear <small>({fearGenerated})</small></h5>
          {this.getFearSymbols(fearGenerated)}
        </div>

        <Button style={{ marginTop: '10px' }} size="lg" color="danger" onClick={this.addFear(1)}>+1 Fear</Button>
        <Button style={{ marginTop: '10px' }} size="lg" color="danger" onClick={this.addFear(2)}>+2 Fear</Button>
        <Button style={{ marginTop: '10px' }} size="lg" color="danger" onClick={this.addFear(3)}>+3 Fear</Button>
      </div>
    );
  }

  private readonly addFear = (amount: number) => {
    const { addFear } = this.props;
    return () => addFear(amount);
  }

  private readonly getFearSymbols = (amount: number) => {
    const fear: JSX.Element[] = [];

    for (let i = 0; i < amount; ++i) {
      fear.push(<img key={i} width={32} height={32} src={fearImage} />)
    }

    return fear;
  }
}
