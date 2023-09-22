export default abstract class Race {
  constructor(private _name: string, private _dexterity: number) {
    this._name = _name;
    this._dexterity = _dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;
}