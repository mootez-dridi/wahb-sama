import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlldirectionsComponent } from './alldirections.component';

const routes: Routes = [
  {path:'', component:AlldirectionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlldirectionsRoutingModule { }
