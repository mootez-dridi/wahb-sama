import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationseApprouverComponent } from './demande-fourniture-approuver.component';

const routes: Routes = [
  {path:'',component:ReclamationseApprouverComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationseApprouverRoutingModule { }
