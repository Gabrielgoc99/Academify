import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CriacaoComponent } from './criacao/criacao.component';
import { EdicaoComponent } from './edicao/edicao.component';
import {AppRoutingModule} from "./app-routing.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { ListarComponent } from './listar/listar.component';





@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavbarComponent,
    FooterComponent,
    CriacaoComponent,
    EdicaoComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,


  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent, FooterComponent, PrincipalComponent]
})
export class AppModule { }
