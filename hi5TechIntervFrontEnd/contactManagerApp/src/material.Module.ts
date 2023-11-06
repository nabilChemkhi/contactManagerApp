import { NgModule } from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatMenuModule} from "@angular/material/menu"
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button"
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from "@angular/material/input";
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  exports: [

    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class MaterialModel{

}
