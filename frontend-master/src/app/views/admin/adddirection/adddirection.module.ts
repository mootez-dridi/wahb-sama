import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdddirectionRoutingModule } from './adddirection-routing.module';
import { AdddirectionComponent } from './adddirection.component';


@NgModule({
  declarations: [
    AdddirectionComponent
  ],
  imports: [
    CommonModule,
    AdddirectionRoutingModule
  ]
})
export class AdddirectionModule { }
