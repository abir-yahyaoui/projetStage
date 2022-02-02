import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'User',
    icon: 'layout-outline',
    children: [
      {
        title: 'add User',
        link: '/pages/user/addUser',
      },
      {
        title: 'edit User',
        link: '/pages/user/editUser',
      },
      {
        title: 'view User',
        link: '/pages/user/viewUser',
      }
    ],
  },

  {
    title: 'Role',
    icon: 'layout-outline',
    children: [
      {
        title: 'add Role',
        link: '/pages/role/addRole',
      },
      {
        title: 'edit Role',
        link: '/pages/role/editRole',
      },
      {
        title: 'view Role',
        link: '/pages/role/viewRole',
      }
    ],
  },

  {
    title: 'Permission',
    icon: 'shopping-cart-outline',
    link: '/pages/permission',
    home: true,
  },

  {
    title: 'Categorie',
    icon: 'layout-outline',
    children: [
      {
        title: 'add Categorie',
        link: '/pages/categorie/addCategorie',
      },
      {
        title: 'edit Categorie',
        link: '/pages/categorie/editCategorie',
      },
      {
        title: 'view Categorie',
        link: '/pages/categorie/viewCategorie',
      }
    ],
  },

  {
    title: 'Entretien',
    icon: 'layout-outline',
    children: [
      {
        title: 'add Entretien',
        link: '/pages/entretien/addEntretien',
      },
      {
        title: 'edit Entretien',
        link: '/pages/entretien/editEntretien',
      },
      {
        title: 'view Entretien',
        link: '/pages/entretien/viewEntretien',
      }
    ],
  },

  {
    title: 'Projet',
    icon: 'layout-outline',
    children: [
      {
        title: 'add Projet',
        link: '/pages/projet/addProjet',
      },
      {
        title: 'edit Projet',
        link: '/pages/projet/editProjet',
      },
      {
        title: 'view Projet',
        link: '/pages/projet/viewProjet',
      }
    ],
  },

  {
    title: 'Tache',
    icon: 'layout-outline',
    children: [
      {
        title: 'add Tache',
        link: '/pages/tache/addTache',
      },
      {
        title: 'edit Tache',
        link: '/pages/tache/editTache',
      },
      {
        title: 'view Tache',
        link: '/pages/tache/viewTache',
      }
    ],
  },

  {
    title: 'Planning',
    icon: 'layout-outline',
    children: [
      {
        title: 'add Planning',
        link: '/pages/planning/addPlanning',
      },
      {
        title: 'edit Planning',
        link: '/pages/planning/editPlanning',
      },
      {
        title: 'view Planning',
        link: '/pages/planning/viewPlanning',
      }
    ],
  },

  {
    title: 'Stagiaire',
    icon: 'layout-outline',
    children: [
      {
        title: 'add Stagiaire',
        link: '/pages/stagiaire/addStagiaire',
      },
      {
        title: 'edit Stagiaire',
        link: '/pages/stagiaire/editStagiaire',
      },
      {
        title: 'view Stagiaire',
        link: '/pages/stagiaire/viewStagiaire',
      }
    ],
  },



  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
