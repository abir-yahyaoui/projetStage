import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';
import { FormsModule} from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';

//import { NewsService } from './news.service';
import { ViewRoleComponent } from './view-role/view-role.component';


@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    RoleRoutingModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,


  ],
  declarations: [
    RoleComponent,
    AddRoleComponent,
    EditRoleComponent,
    ViewRoleComponent,


  ],
  providers: [
   // NewsService,
  ],
})
export class RoleModule { }
