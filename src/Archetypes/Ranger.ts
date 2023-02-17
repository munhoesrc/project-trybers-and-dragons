import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _somarInstancias = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    Ranger._somarInstancias += 1;
    return Ranger._somarInstancias;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;
