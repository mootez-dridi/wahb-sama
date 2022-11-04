import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeFournitureComponent } from './demande-fourniture.component';

const routes: Routes = [
  {path:'',component:DemandeFournitureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeFournitureRoutingModule { }
