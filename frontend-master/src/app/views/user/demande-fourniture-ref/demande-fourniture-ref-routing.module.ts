import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeFournitureRefComponent } from './demande-fourniture-ref.component';

const routes: Routes = [
  {path:'',component:DemandeFournitureRefComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeFournitureRefRoutingModule { }
