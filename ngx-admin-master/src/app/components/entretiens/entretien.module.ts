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
import { EntretienComponent } from './entretien.component';
import { EntretienRoutingModule } from './entretien-routing.module';
import { ViewEntretienComponent } from './view-entretien/view-entretien.component';
import { EditEntretienComponent } from './edit-entretien/edit-entretien.component';
import { AddEntretienComponent } from './add-entretien/add-entretien.component';




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
    EntretienRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,

  ],
  declarations: [
    EntretienComponent,
    AddEntretienComponent,
    EditEntretienComponent,
    ViewEntretienComponent,

  ],
})
export class EntretienModule { }



