import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprouverDmdFourComponent } from './approuver-dmd-four.component';

const routes: Routes = [
  {path:'',component:ApprouverDmdFourComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprouverDmdFourRoutingModule { }
