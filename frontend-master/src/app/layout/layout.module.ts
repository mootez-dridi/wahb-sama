import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Page404notfoundComponent } from './page404notfound/page404notfound.component';
import { TechnoComponent } from '../views/admin/techno/techno.component';
import { UserdetailsComponent } from '../views/admin/userdetails/userdetails.component';



@NgModule({
  declarations: [
    FrontLayoutComponent,
    LoginLayoutComponent,
    Page404notfoundComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class LayoutModule { }
