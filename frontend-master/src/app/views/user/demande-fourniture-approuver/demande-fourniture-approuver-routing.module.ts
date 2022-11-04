import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeFournitureApprouverComponent } from './demande-fourniture-approuver.component';

const routes: Routes = [
  {path:'',component:DemandeFournitureApprouverComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeFournitureApprouverRoutingModule { }
