import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _somarInstancias = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    Warrior._somarInstancias += 1;
    return Warrior._somarInstancias;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
