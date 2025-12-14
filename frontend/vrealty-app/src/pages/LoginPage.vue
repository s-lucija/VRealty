<template>
  <q-page
    class="row items-center justify-center bg-grey-9 text-grey-2"
  >

    <q-card
      flat
      bordered
      class="bg-grey-10 q-pa-lg"
      style="width: 100%; max-width: 420px;"
    >

      <q-card-section class="text-center">
        <div class="text-h5 text-weight-bold q-mb-sm">
          Prijava
        </div>
        <div class="text-grey-4">
          Prijavite se u VRealty
        </div>
      </q-card-section>

      <q-card-section class="q-gutter-md">

        <q-input
          v-model="korisnickoIme"
          label="Korisničko ime"
          outlined
          dark
          color="grey-3"
          label-color="grey-4"
          clearable
          class="full-width"
        />

        <q-input
          v-model="lozinka"
          label="Lozinka"
          type="password"
          outlined
          dark
          color="grey-3"
          label-color="grey-4"
          clearable
          class="full-width"
        />

        <q-btn
          label="Prijava"
          unelevated
          class="full-width q-mt-md"
          style="background-color: #ffffff; color: #000;"
          @click="prijavaKorisnika"
        />

      </q-card-section>

    </q-card>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const korisnickoIme = ref('')
const lozinka = ref('')

function prijavaKorisnika() {
  if (!korisnickoIme.value || !lozinka.value) {
    alert('Molimo unesite korisničko ime i lozinku')
    return
  }

  const loginPodaci = {
    korisnicko_ime: korisnickoIme.value,
    lozinka: lozinka.value
  }

  console.log('Login podaci:', loginPodaci)
  alert('Prijava uspješna (test)')

  korisnickoIme.value = ''
  lozinka.value = ''
}
</script>