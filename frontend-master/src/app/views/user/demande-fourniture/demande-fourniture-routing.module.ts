import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationseComponent } from './demande-fourniture.component';

const routes: Routes = [
  {path:'',component:ReclamationseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationseRoutingModule { }
