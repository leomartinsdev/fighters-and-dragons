import Race from './Race';

export default class Halfling extends Race {
  private static _halflingCounter = 0;

  constructor(
    _name: string,
    _dexterity: number,
    private _maxLifePoints: number = 60,
  ) {
    super(_name, _dexterity);
    Halfling._halflingCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._halflingCounter;
  }
}
