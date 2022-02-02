import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTacheComponent } from './add-tache/add-tache.component';
import { EditTacheComponent } from './edit-tache/edit-tache.component';
import { TacheComponent } from './tache.component';
import { ViewTacheComponent } from './view-tache/view-tache.component';



const routes: Routes = [{
  path: '',
  component:  TacheComponent,
  children: [
    {
      path: 'addTache',
      component: AddTacheComponent,
    },
    {
      path: 'editTache',
      component: EditTacheComponent ,
    },
    {
      path: 'viewTache',
      component: ViewTacheComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TacheRoutingModule {
}
