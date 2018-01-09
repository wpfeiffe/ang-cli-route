import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Comp2ModRoutingModule } from './comp2-mod-routing.module';
import { Comp2Sub3Component } from './comp2-sub3/comp2-sub3.component';
import { Comp2Sub2Component } from './comp2-sub2/comp2-sub2.component';
import { Comp2Sub1Component } from './comp2-sub1/comp2-sub1.component';

@NgModule({
  imports: [
    CommonModule,
    Comp2ModRoutingModule
  ],
  declarations: [Comp2Sub3Component, Comp2Sub2Component, Comp2Sub1Component]
})
export class Comp2ModModule { }
