import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { CategorieComponent } from './categorie.component';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';
import { ViewCategorieComponent } from './view-categorie/view-categorie.component';



const routes: Routes = [{
  path: '',
  component:  CategorieComponent,
  children: [
    {
      path: 'addCategorie',
      component: AddCategorieComponent,
    },
    {
      path: 'editCategorie',
      component: EditCategorieComponent ,
    },
    {
      path: 'viewCategorie',
      component: ViewCategorieComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorieRoutingModule {
}
