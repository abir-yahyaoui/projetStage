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
import { ProjetComponent } from './projet.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { EditProjetComponent } from './edit-projet/edit-projet.component';
import { ViewProjetComponent } from './view-projet/view-projet.component';
import { ProjetRoutingModule } from './projet-routing.module';




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
    ProjetRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,

  ],
  declarations: [
    ProjetComponent,
    AddProjetComponent,
    EditProjetComponent,
    ViewProjetComponent,

  ],
})
export class ProjetModule { }



