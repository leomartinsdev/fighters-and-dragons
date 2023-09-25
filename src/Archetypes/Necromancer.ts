import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _necromancersCounter = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'mana',
  ) {
    super(name);
    Necromancer._necromancersCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return this._necromancersCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}