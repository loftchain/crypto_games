import {NgModule} from "@angular/core";
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatListModule
} from '@angular/material'

@NgModule({
imports: [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatListModule
],
exports: [
 MatSidenavModule,
 MatToolbarModule,
 MatButtonModule,
 MatListModule
]
})

export class MaterialModule {

}
