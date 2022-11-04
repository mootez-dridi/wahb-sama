import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlltypesdemandesRoutingModule } from './alltypesdemandes-routing.module';
import { AlltypesdemandesComponent } from './alltypesdemandes.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AlltypesdemandesComponent
  ],
  imports: [
    CommonModule,
    AlltypesdemandesRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class AlltypesdemandesModule { }
