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
  winChance;
  betSub: Subscription;
  winChanceSub: Subscription;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.betSub = this.gameService.betChanged.subscribe(
      bet => {
        this.bet = bet;
        this.changeCommissionPercent();
      }
    );

    this.winChanceSub = this.gameService.winChanceChanged
      .subscribe(
        chance => this.winChance = chance
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
    this.betSub.unsubscribe();
    this.winChanceSub.unsubscribe();
  }
}
