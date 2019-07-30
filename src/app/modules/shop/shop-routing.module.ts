import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenComponent } from './women/women.component';




const homeRoutes : Routes = [
    {path: 'shop', children: [
      {path:'women', component:WomenComponent}
    ]}
]

@NgModule({
    imports: [
      RouterModule.forChild(homeRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
export class ShopRoutingModule { }