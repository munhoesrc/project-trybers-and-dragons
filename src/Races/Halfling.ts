import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _somarInstancias = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number { 
    Halfling._somarInstancias += 1;
    return Halfling._somarInstancias;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
