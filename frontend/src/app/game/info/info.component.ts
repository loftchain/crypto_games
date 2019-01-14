import {Component, OnDestroy, OnInit} from '@angular/core';
import { GameService } from "../game.service";
import { Subscription } from "rxjs/internal/Subscription";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {
  prize = 1.94;
  winAmount = 0.019;
  commissionPercent = 3;
  bet;
  jackpot = 0.12;
  jackpotMinBet = 10;
  toDecimal = 100;
  betSubscription: Subscription;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.betSubscription = this.gameService.betChanged.subscribe(
      bet => {
        this.bet = bet;
        this.changeCommissionPercent();
      }
    );
  }

  changeCommissionPercent() {
    if (this.bet === 1) {
      this.commissionPercent = 3;
    } else if (this.bet === 2) {
      this.commissionPercent = 1.5;
    } else {
      this.commissionPercent = 1;
    }
  }

  ngOnDestroy() {
    this.betSubscription.unsubscribe();
  }
}
