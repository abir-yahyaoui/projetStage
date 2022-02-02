import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { EditProjetComponent } from './edit-projet/edit-projet.component';
import { ProjetComponent } from './projet.component';
import { ViewProjetComponent } from './view-projet/view-projet.component';



const routes: Routes = [{
  path: '',
  component:  ProjetComponent,
  children: [
    {
      path: 'addProjet',
      component: AddProjetComponent,
    },
    {
      path: 'editProjet',
      component: EditProjetComponent ,
    },
    {
      path: 'viewProjet',
      component: ViewProjetComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjetRoutingModule {
}
