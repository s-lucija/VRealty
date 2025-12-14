const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'novi-obilasci',
        component: () => import('pages/NoviObilasciPage.vue')
      },
      {
        path: 'obilasci',
        component: () => import('pages/PopisObilazakaPage.vue')
      },
      {
        path: 'pretrazivanje',
        component: () => import('pages/PretrazivanjePage.vue')
      },
      {
        path: 'unos',
        component: () => import('pages/UnosNovogObilaskaPage.vue')
      },
      {
        path: 'registracija',
        component: () => import('pages/RegistracijaPage.vue')
      },
      {
        path: 'login',
        component: () => import('pages/LoginPage.vue')
      }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes