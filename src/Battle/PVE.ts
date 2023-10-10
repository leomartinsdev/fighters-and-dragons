import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _fighter: Fighter;
  private _monsters: (SimpleFighter | Fighter)[];

  constructor(fighter: Fighter, monster: (SimpleFighter | Fighter)[]) {
    super(fighter);
    this._fighter = fighter;
    this._monsters = monster;
  }

  fight(): number {
    while (this._fighter.lifePoints !== -1
      && this._monsters.some((monster) => monster.lifePoints !== -1)) {
      this._monsters.forEach((monster) => {
        this._fighter.attack(monster);
        monster.attack(this._fighter);
      });
    }

    return super.fight();
  }
}