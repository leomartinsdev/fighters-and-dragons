export default abstract class Race {
  private static createdRacesCounter = 0;

  constructor(private _name: string, private _dexterity: number) {
    this._name = _name;
    this._dexterity = _dexterity;
    Race.createdRacesInstances();
  }

  static createdRacesInstances(): number {
    if (Race.createdRacesCounter === 0) {
      throw new Error('Not implemented');
    }
    Race.createdRacesCounter += 1;
    return this.createdRacesCounter;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;
}