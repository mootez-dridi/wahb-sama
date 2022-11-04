import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDemandeFournitureComponent } from './add-demande-fourniture.component';

const routes: Routes = [
  {path:'',component:AddDemandeFournitureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDemandeFournitureRoutingModule { }
