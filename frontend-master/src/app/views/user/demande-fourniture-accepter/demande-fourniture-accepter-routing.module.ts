import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationseAccepterComponent } from './demande-fourniture-accepter.component';

const routes: Routes = [
  {path:"",component:ReclamationseAccepterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationseAccepterRoutingModule { }
