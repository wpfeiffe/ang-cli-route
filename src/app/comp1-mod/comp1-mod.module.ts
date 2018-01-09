import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Comp1ModRoutingModule } from './comp1-mod-routing.module';
import { Comp1Sub1Component } from './comp1-sub1/comp1-sub1.component';
import { Comp1Sub2Component } from './comp1-sub2/comp1-sub2.component';
import { Comp1Sub3Component } from './comp1-sub3/comp1-sub3.component';

@NgModule({
  imports: [
    CommonModule,
    Comp1ModRoutingModule
  ],
  declarations: [Comp1Sub1Component, Comp1Sub2Component, Comp1Sub3Component]
})
export class Comp1ModModule { }
