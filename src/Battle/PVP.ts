import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    // As personagens devem batalhar *até* (while) uma das duas ser derrotada, em outras palavras, a batalha só deverá terminar, quando alguma personagem ter seus pontos de vida (lifePoints) igual a -1
    while (this._player1.lifePoints !== -1 && this._player2.lifePoints !== -1) {
      this._player1.attack(this._player2);
      this._player2.attack(this._player1);
    }

    return super.fight();
  }
}