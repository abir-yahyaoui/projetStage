import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PermissionsComponent } from '../components/permissions/permissions.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'user',
      loadChildren: () => import('../components/users/user.module')
        .then(m => m.UserModule),
    },
    {
      path: 'role',
      loadChildren: () => import('../components/roles/role.module')
        .then(m => m.RoleModule),
    },

    {
      path: 'permission',
      component: PermissionsComponent,
    },

    {
      path: 'categorie',
      loadChildren: () => import('../components/categories/categorie.module')
        .then(m => m.CategorieModule),
    },
    {
      path: 'entretien',
      loadChildren: () => import('../components/entretiens/entretien.module')
        .then(m => m.EntretienModule),
    },

    {
      path: 'projet',
      loadChildren: () => import('../components/projets/projet.module')
        .then(m => m.ProjetModule),
    },

    {
      path: 'tache',
      loadChildren: () => import('../components/taches/tache.module')
        .then(m => m.TacheModule),
    },

    {
      path: 'planning',
      loadChildren: () => import('../components/plannings/planning.module')
        .then(m => m.PlanningModule),
    },

    {
      path: 'stagiaire',
      loadChildren: () => import('../components/stagiaires/stagiaire.module')
        .then(m => m.StagiaireModule),
    },

    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
