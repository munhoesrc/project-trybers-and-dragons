import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _somarInstancias = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    Mage._somarInstancias += 1;
    return Mage._somarInstancias;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;
