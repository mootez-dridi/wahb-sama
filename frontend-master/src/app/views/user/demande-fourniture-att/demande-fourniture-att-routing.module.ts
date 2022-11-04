import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeFournitureAttComponent } from './demande-fourniture-att.component';

const routes: Routes = [
  {path:'',component:DemandeFournitureAttComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeFournitureAttRoutingModule { }
