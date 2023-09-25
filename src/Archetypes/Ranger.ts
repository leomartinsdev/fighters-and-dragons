import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _rangersCounter = 0;

  constructor(
    name: string,
    private _energyType: EnergyType = 'stamina',
  ) {
    super(name);
    Ranger._rangersCounter += 1;
  }

  static createdArchetypeInstances(): number {
    return this._rangersCounter;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}