import Race from './Race';

export default class Elf extends Race {
  private static _elfCounter = 0;

  constructor(
    _name: string,
    _dexterity: number,
    private _maxLifePoints: number = 99,
  ) {
    super(_name, _dexterity);
    Elf._elfCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._elfCounter;
  }
}