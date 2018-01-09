import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Sub1Component } from './comp1-sub1/comp1-sub1.component';
import { Comp1Sub2Component } from './comp1-sub2/comp1-sub2.component';
import { Comp1Sub3Component } from './comp1-sub3/comp1-sub3.component';


const routes: Routes = [
  {
    path: 'comp1-sub1',
    component: Comp1Sub1Component
  },
  {
    path: 'comp1-sub2',
    component: Comp1Sub2Component
  },
  {
    path: 'comp1-sub3',
    component: Comp1Sub3Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Comp1ModRoutingModule { }
