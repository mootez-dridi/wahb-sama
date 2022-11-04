import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprouverDmdFourComponent } from '../../user/approuver-dmd-four/approuver-dmd-four.component';
import { ApprobationDmdFourComponent } from './approbation-dmd-four.component';

const routes: Routes = [
  {path:'',component:ApprobationDmdFourComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprobationDmdFourRoutingModule { }
