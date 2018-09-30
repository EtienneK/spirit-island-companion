import { Types } from '../../spirit-island-card-katalog/src/types'

export default interface IDataState {
  readonly fearGenerated: number;
  readonly fearPool: number;
  readonly fearDeck: ReadonlyArray<Types.FearCard>;
  readonly fearEarned: ReadonlyArray<Types.FearCard>;
  readonly fearDiscarded: ReadonlyArray<Types.FearCard>;
  readonly gameStarted: boolean;
  readonly gameEnded: boolean;
  readonly numberOfPlayers?: number;
}
