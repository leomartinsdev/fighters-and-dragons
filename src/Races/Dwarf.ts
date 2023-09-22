import Race from './Race';

export default class Dwarf extends Race {
  static _dwarfCounter = 0;

  constructor(
    _name: string,
    _dexterity: number,
    private _maxLifePoints: number = 80,
  ) {
    super(_name, _dexterity);
    Dwarf._dwarfCounter += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._dwarfCounter;
  }
}