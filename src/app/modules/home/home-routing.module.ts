import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';




const homeRoutes : Routes = [
    {path: 'home', component: LandingPageComponent }
]

@NgModule({
    imports: [
      RouterModule.forChild(homeRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
export class HomeRoutingModule { }