import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './layout/front-layout/front-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { Page404notfoundComponent } from './layout/page404notfound/page404notfound.component';
import { ChFournitureGuard } from './views/guards/ch-fourniture.guard';
import { GuardadminGuard } from './views/guards/guardadmin.guard';
import { GuarduserGuard } from './views/guards/guarduser.guard';

const routes: Routes = [

    {path:'user',component:FrontLayoutComponent,canActivate:[GuarduserGuard],children:[
    {path:'',loadChildren:()=>import('./views/user/dashbord/dashbord.module').then(m=>m.DashbordModule)},
    {path:'dashbord',loadChildren:()=>import('./views/user/dashbord/dashbord.module').then(m=>m.DashbordModule)},
    {path:'Reclamationse',loadChildren:()=>import('./views/user/demande-fourniture/demande-fourniture.module').then(m=>m.ReclamationseModule)},
    {path:'ReclamationseAccepter',loadChildren:()=>import('./views/user/demande-fourniture-accepter/demande-fourniture-accepter.module').then(m=>m.ReclamationseAccepterModule)},
    {path:'ReclamationseApprouver',loadChildren:()=>import('./views/user/demande-fourniture-approuver/demande-fourniture-approuver.module').then(m=>m.ReclamationseApprouverModule)},
    {path:'ReclamationseRef',loadChildren:()=>import('./views/user/demande-fourniture-ref/demande-fourniture-ref.module').then(m=>m.ReclamationseRefModule)},
    {path:'ReclamationseAtt',loadChildren:()=>import('./views/user/demande-fourniture-att/demande-fourniture-att.module').then(m=>m.ReclamationseAttModule)},
    {path:'addReclamationse',loadChildren:()=>import('./views/user/add-demande-fourniture/add-demande-fourniture.module').then(m=>m.AddReclamationseModule)},
    {path:'approuverDmdFour',loadChildren:()=>import('./views/user/approuver-dmd-four/approuver-dmd-four.module').then(m=>m.ApprouverDmdFourModule)},
    {path:'approbationDmdFour',canActivateChild:[ChFournitureGuard],loadChildren:()=>import('./views/chFourniture/approbation-dmd-four/approbation-dmd-four.module').then(m=>m.ApprobationDmdFourModule)},
    {path:'techno',loadChildren:()=>import('./views/admin/techno/techno.module').then(m=>m.TechnoModule)},


    ]},

    {path:'admin',component:FrontLayoutComponent,canActivate:[GuardadminGuard],children:[
      {path:'',loadChildren:()=>import('./views/admin/dashbord/dashbord.module').then(m=>m.DashbordModule)},
      {path:'dashboard',loadChildren:()=>import('./views/admin/dashbord/dashbord.module').then(m=>m.DashbordModule)},
      {path:'allusers',loadChildren:()=>import('./views/admin/allusers/allusers.module').then(m=>m.AllusersModule)},
      {path:'userdetails/:id',loadChildren:()=>import('./views/admin/userdetails/userdetails.module').then(m=>m.UserdetailsModule)},
      {path:'adduser',loadChildren:()=>import('./views/admin/adduser/adduser.module').then(m=>m.AdduserModule)},

      {path:"alldirections",loadChildren:()=>import('./views/admin/alldirections/alldirections.module').then(m=>m.AlldirectionsModule)},
      {path:"adddirection",loadChildren:()=>import('./views/admin/adddirection/adddirection.module').then(m=>m.AdddirectionModule)},
      {path:"alltypesdemandes",loadChildren:()=>import('./views/admin/alltypesdemandes/alltypesdemandes.module').then(m=>m.AlltypesdemandesModule)},
      {path:"addtypedemande",loadChildren:()=>import('./views/admin/addtypedemande/addtypedemande.module').then(m=>m.AddtypedemandeModule)},
      {path:'techno',loadChildren:()=>import('./views/admin/techno/techno.module').then(m=>m.TechnoModule)},
      {path:'addtechno',loadChildren:()=>import('./views/admin/addtechno/addtechno.module').then(m=>m.AddtechnoModule)},

    ]},

    {path:'login',component:LoginLayoutComponent},
    {path:'',component:LoginLayoutComponent},
    {path:'**',component:Page404notfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
