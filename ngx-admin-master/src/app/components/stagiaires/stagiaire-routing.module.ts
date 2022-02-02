import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStagiaireComponent } from './add-stagiaire/add-stagiaire.component';
import { EditStagiaireComponent } from './edit-stagiaire/edit-stagiaire.component';
import { StagiaireComponent } from './stagiaire.component';
import { ViewStagiaireComponent } from './view-stagiaire/view-stagiaire.component';



const routes: Routes = [{
  path: '',
  component:  StagiaireComponent,
  children: [
    {
      path: 'addStagiaire',
      component: AddStagiaireComponent,
    },
    {
      path: 'editStagiaire',
      component: EditStagiaireComponent ,
    },
    {
      path: 'viewStagiaire',
      component: ViewStagiaireComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StagiaireRoutingModule {
}
