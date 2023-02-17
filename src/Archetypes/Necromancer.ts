import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _somarInstancias = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    Necromancer._somarInstancias += 1;
    return Necromancer._somarInstancias;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;
