import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEntretienComponent } from './add-entretien/add-entretien.component';
import { EditEntretienComponent } from './edit-entretien/edit-entretien.component';
import { EntretienComponent } from './entretien.component';
import { ViewEntretienComponent } from './view-entretien/view-entretien.component';



const routes: Routes = [{
  path: '',
  component:  EntretienComponent,
  children: [
    {
      path: 'addEntretien',
      component: AddEntretienComponent,
    },
    {
      path: 'editEntretien',
      component: EditEntretienComponent,
    },
    {
      path: 'viewEntretien',
      component: ViewEntretienComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntretienRoutingModule {
}
