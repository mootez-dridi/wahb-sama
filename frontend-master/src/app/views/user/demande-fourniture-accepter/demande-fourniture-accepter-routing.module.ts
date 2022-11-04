import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeFournitureAccepterComponent } from './demande-fourniture-accepter.component';

const routes: Routes = [
  {path:"",component:DemandeFournitureAccepterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeFournitureAccepterRoutingModule { }
