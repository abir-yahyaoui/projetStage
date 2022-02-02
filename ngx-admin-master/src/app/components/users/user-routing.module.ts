import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [{
  path: '',
  component:  UserComponent,
  children: [
    {
      path: 'addUser',
      component: AddUserComponent,
    },
    {
      path: 'editUser',
      component: EditUserComponent ,
    },
    {
      path: 'viewUser',
      component: ViewUserComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}
