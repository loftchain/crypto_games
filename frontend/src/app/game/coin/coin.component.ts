import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GameService} from "../game.service";

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss']
})
export class CoinComponent implements OnInit {
  @ViewChild('minus') minusButton: ElementRef<HTMLButtonElement>;
  @ViewChild('plus') plusButton: ElementRef<HTMLButtonElement>;

  bets = [5, 10, 15, 20];
  bet = 1;
  percent = 100;
  minValue = 1;
  step = 1;
  maxValue= 20;

  minusDisabled = true;
  plusDisabled = false;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  plusOrMinusBet(operation: string) {
    if (this.bet > this.minValue && operation === '-') {
      this.bet -= this.step;
      this.disabledButton();
      this.gameService.betChanged.next(this.bet);
    } else if (this.bet < this.maxValue && operation === '+') {
      this.bet += this.step;
      this.disabledButton();
      this.gameService.betChanged.next(this.bet);
    }
  }

  setCertainBet(event) {
    const numValue = +event.target.textContent;
    this.bet = numValue;
    this.disabledButton();
    this.gameService.betChanged.next(this.bet);
  }

  disabledButton() {
    if (this.bet === this.maxValue) {
      this.plusDisabled = true;
    } else if (this.bet === this.minValue) {
      this.minusDisabled = true;
    } else {
      this.plusDisabled = false;
      this.minusDisabled = false;
    }

  }

}
