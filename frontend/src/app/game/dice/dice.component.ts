import { Component, OnInit } from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})

export class DiceComponent implements OnInit {
  winChance: number;

  constructor(private gameService: GameService) { }

  ngOnInit() {

  }

  toggleActiveDice(event) {
    const dices = document.body.querySelectorAll('.dice i');
    const activeDices = document.body.querySelectorAll('.dice i.active');
    if (activeDices.length < dices.length - 1) {
      if (event.target.classList.contains('active') && activeDices.length !== 1) {
        event.target.classList.remove('active');
      } else {
        event.target.classList.add('active');
      }
    } else if (activeDices.length == dices.length - 1) {
      event.target.classList.remove('active');
    }

    this.changeWinChance();
    this.gameService.winChanceChanged.next(this.winChance);
  }

  changeWinChance() {
    const dices = document.body.querySelectorAll('.dice i');
    const activeDices = document.body.querySelectorAll('.dice i.active');
    this.winChance = ((activeDices.length / dices.length) * 100).toFixed(2);
    
    // switch (activeDices.length) {
    //   case 1:
    //     this.winChance = 16.67;
    //     break;
    //   case 2:
    //     this.winChance = 33.33;
    //     break;
    //   case 3:
    //     this.winChance = 50;
    //     break;
    //   case 4:
    //     this.winChance = 66.67;
    //     break;
    //   case 5:
    //     this.winChance = 83.33;
    //     break;
    //   default:
    //     this.winChance = 16.67;
    //     break;
    // }
  }
}
