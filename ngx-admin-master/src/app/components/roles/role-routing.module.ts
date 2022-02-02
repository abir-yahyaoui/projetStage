import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { RoleComponent } from './role.component';
import { ViewRoleComponent } from './view-role/view-role.component';


const routes: Routes = [{
  path: '',
  component:  RoleComponent,
  children: [
    {
      path: 'addRole',
      component: AddRoleComponent,
    },
    {
      path: 'editRole',
      component: EditRoleComponent ,
    },
    {
      path: 'viewRole',
      component: ViewRoleComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleRoutingModule {
}
