import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _somarInstancias = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    Orc._somarInstancias += 1;
    return Orc._somarInstancias;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
