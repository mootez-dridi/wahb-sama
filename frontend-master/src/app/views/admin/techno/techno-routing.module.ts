import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnoComponent } from './techno.component';
const routes: Routes = [    {path:'', component:TechnoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnoRoutingModule { }
