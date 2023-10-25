import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribersPageComponent } from './subscribers-page.component';

const routes: Routes = [
    { path: '', component: SubscribersPageComponent }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class SubscribersRoutingModule { }