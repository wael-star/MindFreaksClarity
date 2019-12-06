import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UXComponent } from './ux/ux.component';
import { ClarityPageComponent } from './clarity-page/clarity-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterClrComponent } from './footer-clr/footer-clr.component';
import {AppRoutes} from './app.routing'

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    ClarityModule,
    HttpClientModule
    // other imports here
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    UXComponent,
    ClarityPageComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterClrComponent,
    
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
