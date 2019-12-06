import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UXComponent } from './ux/ux.component';
import { ClarityPageComponent } from './clarity-page/clarity-page.component';
import { NotFoundComponent } from './not-found/not-found.component';



export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
    }, 
    {
        path: '',
        component: HomepageComponent,
    },
    {
        path: 'home',
        component: HomepageComponent
    },
    {
        path: 'ux',
        component: UXComponent
    },
    {
        path: 'clarity',
        component: ClarityPageComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },     
    {
        path: '**',
        redirectTo: 'not-found'
    }
]
