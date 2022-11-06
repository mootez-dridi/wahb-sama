import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {  ReclamationseComponent } from './views/user/demande-fourniture/demande-fourniture.component';
import { AddReclamationseComponent } from './views/user/add-demande-fourniture/add-demande-fourniture.component';
import { ApprouverDmdFourComponent } from './views/user/approuver-dmd-four/approuver-dmd-four.component';
import { ApprobationDmdFourComponent } from './views/chFourniture/approbation-dmd-four/approbation-dmd-four.component';
import { ReclamationseAccepterComponent } from './views/user/demande-fourniture-accepter/demande-fourniture-accepter.component';
import { ReclamationseApprouverComponent } from './views/user/demande-fourniture-approuver/demande-fourniture-approuver.component';



@NgModule({
  declarations: [
    AppComponent,
    ReclamationseComponent,
    AddReclamationseComponent,
    ApprouverDmdFourComponent,
    ApprobationDmdFourComponent,
    ReclamationseAccepterComponent,
    ReclamationseApprouverComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
