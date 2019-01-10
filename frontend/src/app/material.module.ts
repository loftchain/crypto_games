import {NgModule} from "@angular/core";
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatMenuModule
} from '@angular/material'

@NgModule({
imports: [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatListModule,
  MatMenuModule
],
exports: [
 MatSidenavModule,
 MatToolbarModule,
 MatButtonModule,
 MatListModule,
  MatMenuModule
]
})

export class MaterialModule {

}
