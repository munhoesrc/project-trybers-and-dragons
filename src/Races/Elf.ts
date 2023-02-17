import Race from './Race';

class Elf extends Race {
  private _maxLifePoits: number;
  private static _somarInstancias = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoits = 99;
  }

  static createdRacesInstances(): number {
    Elf._somarInstancias += 1;
    return Elf._somarInstancias;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoits;
  }
}

export default Elf;