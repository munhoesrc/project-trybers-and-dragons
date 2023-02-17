import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _somarInstancias = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  static createdRacesInstances(): number {
    Dwarf._somarInstancias += 1;
    return Dwarf._somarInstancias;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;
