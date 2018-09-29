export default interface IDataState {
  readonly fearGenerated: number;
  readonly fearPool: number;
  readonly gameStarted: boolean;
  readonly numberOfPlayers?: number;
}
