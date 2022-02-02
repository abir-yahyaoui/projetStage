import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { CategorieRoutingModule } from './categorie-routing.module';
import { CategorieComponent } from './categorie.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { ViewCategorieComponent } from './view-categorie/view-categorie.component';


//import { NewsService } from './news.service';


@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    CategorieRoutingModule,
  ],
  declarations: [
    CategorieComponent ,
    AddCategorieComponent,
    EditCategorieComponent,
    ViewCategorieComponent,


  ],
  providers: [
   // NewsService,
  ],
})
export class CategorieModule { }
