import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdddirectionComponent } from './adddirection.component';

const routes: Routes = [
  {path:'',component:AdddirectionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdddirectionRoutingModule { }
