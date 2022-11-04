import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from '../dashbord/dashbord.component';
import { AdduserComponent } from './adduser.component';

const routes: Routes = [
  {path:'',component:AdduserComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdduserRoutingModule { }
