import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.module";

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';

import {HeaderComponent} from "./navigation/header/header.component";
import {SidenavListComponent} from "./navigation/sidenav-list/sidenav-list.component";
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { StatisticComponent } from './main/statistic/statistic.component';
import { GamesComponent } from './main/games/games.component';
import { FaqsComponent } from './faqs/faqs.component';
import { GameComponent } from './game/game.component';
import { CoinComponent } from './game/coin/coin.component';
import {FormsModule} from "@angular/forms";
import { Web3Component } from './game/web3/web3.component';
import { InfoComponent } from './game/info/info.component';
import {GameService} from "./game/game.service";
import { DiceComponent } from './game/dice/dice.component';
import { BetsComponent } from './game/bets/bets.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    FooterComponent,
    MainComponent,
    StatisticComponent,
    GamesComponent,
    FaqsComponent,
    GameComponent,
    CoinComponent,
    Web3Component,
    InfoComponent,
    DiceComponent,
    BetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
