import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlanningComponent } from './add-planning/add-planning.component';
import { EditPlanningComponent } from './edit-planning/edit-planning.component';
import { PlanningComponent } from './planning.component';
import { ViewPlanningComponent } from './view-planning/view-planning.component';



const routes: Routes = [{
  path: '',
  component:  PlanningComponent,
  children: [
    {
      path: 'addPlanning',
      component: AddPlanningComponent,
    },
    {
      path: 'editPlanning',
      component: EditPlanningComponent ,
    },
    {
      path: 'viewPlanning',
      component: ViewPlanningComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanningRoutingModule {
}
