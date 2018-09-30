import * as React from 'react';
import { Button } from 'reactstrap';

import { Types } from './spirit-island-card-katalog/src/types'

interface IProps {
  readonly fearDeck: ReadonlyArray<Types.FearCard>;
  readonly fearEarned: ReadonlyArray<Types.FearCard>;
  readonly fearDiscarded: ReadonlyArray<Types.FearCard>;
}

export default class FearDeck extends React.Component<IProps> {
  public render() {
    const { fearDeck, fearEarned, fearDiscarded } = this.props;
    return (
      <div className='card'>
        <div>Fear Deck: {fearDeck.length}</div>
        {fearDeck.map((card, i) => <div key={`fd_${i}`}>-- {
          card.name
        }</div>)}
        <div>Earned Fear: {fearEarned.length}</div>
        {fearEarned.map((card, i) => <div key={`fe_${i}`}>-- {
          card.name
        }</div>)}
        <Button>Reveal Earned Fear Cards</Button>
        <div>Fear Discarded: {fearDiscarded.length}</div>
        <Button>Show Discarded Fear Cards</Button>
      </div>
    );
  }
}
