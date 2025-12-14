<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-9 text-grey-2">

    <q-header elevated class="bg-grey-10 text-grey-2">
      <q-toolbar class="relative-position">

        <q-toolbar-title
          class="text-weight-bold text-h5 absolute-left q-ml-md flex items-center"
        >
          VRealty
        </q-toolbar-title>

        <div class="row items-center justify-center full-width q-gutter-md">
          <q-btn
            v-for="link in centerLinks"
            :key="link.name"
            flat
            dense
            color="grey-3"
            :icon="link.icon"
            :label="link.label"
            :to="link.to"
          />
        </div>

        <div class="row items-center q-gutter-sm absolute-right q-mr-md">
          <q-btn
            v-for="link in rightLinks"
            :key="link.name"
            flat
            dense
            color="grey-3"
            :icon="link.icon"
            :label="link.label"
            :to="link.to"
          />
        </div>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const centerLinks = ref([
  {
    name: 'naslovnica',
    label: 'Naslovnica',
    icon: 'home',
    to: '/'
  },
  {
    name: 'novi-obilasci',
    label: 'Novi obilasci',
    icon: 'new_releases',
    to: '/novi-obilasci'
  },
  {
    name: 'popis-obilazaka',
    label: 'Popis obilazaka',
    icon: 'view_list',
    to: '/obilasci'
  },
  {
    name: 'pretrazivanje',
    label: 'Pretraživanje',
    icon: 'search',
    to: '/pretrazivanje'
  },
  {
    name: 'unos-obilaska',
    label: 'Dodavanje obilaska',
    icon: 'add_home',
    to: '/unos'
  }
])

const rightLinks = ref([
  {
    name: 'registracija',
    label: 'Registracija',
    icon: 'person_add',
    to: '/registracija'
  },
  {
    name: 'login',
    label: 'Prijava',
    icon: 'login',
    to: '/login'
  }
])
</script>