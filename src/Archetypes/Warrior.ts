import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _warriorsCounter = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Warrior._warriorsCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return this._warriorsCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}