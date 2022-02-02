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
import { AddTacheComponent } from './add-tache/add-tache.component';
import { TacheComponent } from './tache.component';
import { EditTacheComponent } from './edit-tache/edit-tache.component';
import { ViewTacheComponent } from './view-tache/view-tache.component';
import { TacheRoutingModule } from './tache-routing.module';




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
    TacheRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,

  ],
  declarations: [
    TacheComponent,
    AddTacheComponent,
    EditTacheComponent,
    ViewTacheComponent,

  ],
})
export class TacheModule { }



