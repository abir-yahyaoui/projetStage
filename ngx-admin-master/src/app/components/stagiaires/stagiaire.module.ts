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
import { StagiaireComponent } from './stagiaire.component';
import { AddStagiaireComponent } from './add-stagiaire/add-stagiaire.component';
import { EditStagiaireComponent } from './edit-stagiaire/edit-stagiaire.component';
import { ViewStagiaireComponent } from './view-stagiaire/view-stagiaire.component';
import { StagiaireRoutingModule } from './stagiaire-routing.module';




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
    StagiaireRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,

  ],
  declarations: [
    StagiaireComponent,
    AddStagiaireComponent,
    EditStagiaireComponent,
    ViewStagiaireComponent,

  ],
})
export class StagiaireModule { }



