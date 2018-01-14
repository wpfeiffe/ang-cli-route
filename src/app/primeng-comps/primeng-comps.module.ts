import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengCompsRoutingModule } from './primeng-comps-routing.module';
import { PrimengDatatableComponent } from './primeng-datatable/primeng-datatable.component';
import { PrimengDtArticleComponent } from "./primeng-dt-article/primeng-dt-article.component";
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { ArticlesService } from "../services/articles.service";

@NgModule({
    imports: [
        CommonModule,
        PrimengCompsRoutingModule,
        DataTableModule,
        SharedModule
    ],
    declarations: [
        PrimengDtArticleComponent,
        PrimengDatatableComponent
    ],
    providers: [
      ArticlesService
    ]
})
export class PrimengCompsModule {
}
