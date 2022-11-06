import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReclamationseComponent } from './add-demande-fourniture.component';

const routes: Routes = [
  {path:'',component:AddReclamationseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddReclamationseRoutingModule { }
