import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';

import { FormsModule as ngFormsModule } from '@angular/forms';
import { PlanningComponent } from './planning.component';
import { AddPlanningComponent } from './add-planning/add-planning.component';
import { EditPlanningComponent } from './edit-planning/edit-planning.component';
import { ViewPlanningComponent } from './view-planning/view-planning.component';
import { PlanningRoutingModule } from './planning-routing.module';




@NgModule({
  imports: [
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    PlanningRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,

  ],
  declarations: [
    PlanningComponent,
    AddPlanningComponent,
    EditPlanningComponent,
    ViewPlanningComponent,

  ],
})
export class PlanningModule { }



