import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _magesCounter = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'mana',
  ) {
    super(name);
    Mage._magesCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return this._magesCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}