import Race from './Race';

export default class Orc extends Race {
  private static _orcsCounter = 0;

  constructor(
    _name: string,
    _dexterity: number,
    private _maxLifePoints: number = 74,
  ) {
    super(_name, _dexterity);
    Orc._orcsCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._orcsCounter;
  }
}