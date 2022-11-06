import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationseAttComponent } from './demande-fourniture-att.component';

const routes: Routes = [
  {path:'',component:ReclamationseAttComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationseAttRoutingModule { }
