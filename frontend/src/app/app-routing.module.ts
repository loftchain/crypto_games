import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./main/main.component";
import {FaqsComponent} from "./faqs/faqs.component";
import {GameComponent} from "./game/game.component";
import {CoinComponent} from "./game/coin/coin.component";
import {DiceComponent} from "./game/dice/dice.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'game', component: GameComponent, children: [
      { path: 'coin', component: CoinComponent },
      { path: 'dice', component: DiceComponent }
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
