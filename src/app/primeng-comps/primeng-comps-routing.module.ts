import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimengDatatableComponent } from "./primeng-datatable/primeng-datatable.component";
import { PrimengDtArticleComponent } from "./primeng-dt-article/primeng-dt-article.component";

const routes: Routes = [
    {
        path: 'pn-datatable',
        component: PrimengDatatableComponent
    },
    {
        path: 'pn-dt-articles',
        component: PrimengDtArticleComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimengCompsRoutingModule { }
