import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationseRefComponent } from './demande-fourniture-ref.component';

const routes: Routes = [
  {path:'',component:ReclamationseRefComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationseRefRoutingModule { }
