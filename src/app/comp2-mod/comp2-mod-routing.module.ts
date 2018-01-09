import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp2Sub1Component } from './comp2-sub1/comp2-sub1.component';
import { Comp2Sub2Component } from './comp2-sub2/comp2-sub2.component';
import { Comp2Sub3Component } from './comp2-sub3/comp2-sub3.component';

const routes: Routes = [
  {
    path: 'comp2-sub1',
    component: Comp2Sub1Component
  },
  {
    path: 'comp2-sub2',
    component: Comp2Sub2Component
  },
  {
    path: 'comp2-sub3',
    component: Comp2Sub3Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Comp2ModRoutingModule { }
