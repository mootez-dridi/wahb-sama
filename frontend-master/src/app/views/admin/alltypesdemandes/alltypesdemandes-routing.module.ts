import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltypesdemandesComponent } from './alltypesdemandes.component';

const routes: Routes = [
  {path:'', component:AlltypesdemandesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlltypesdemandesRoutingModule { }
