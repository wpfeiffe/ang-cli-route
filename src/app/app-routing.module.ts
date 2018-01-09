import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'comp1',
    loadChildren: './comp1-mod/comp1-mod.module#Comp1ModModule'
  },
  {
    path: 'comp2',
    loadChildren: './comp2-mod/comp2-mod.module#Comp2ModModule'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
