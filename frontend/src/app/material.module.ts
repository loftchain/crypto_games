import {NgModule} from "@angular/core";
import {
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material'

@NgModule({
imports: [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
],
exports: [
 MatSidenavModule,
 MatToolbarModule,
 MatButtonModule,
 MatIconModule
]
})

export class MaterialModule {

}
