import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtypedemandeComponent } from './addtypedemande.component';

const routes: Routes = [
  {path:'',component:AddtypedemandeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddtypedemandeRoutingModule { }
