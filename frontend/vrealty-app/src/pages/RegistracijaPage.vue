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
          Registracija
        </div>
        <div class="text-grey-4">
          Kreirajte svoj VRealty račun
        </div>
      </q-card-section>

      <q-card-section class="q-gutter-md">

        <q-input
          v-model="ime"
          label="Ime"
          outlined
          dark
          color="grey-3"
          label-color="grey-4"
          clearable
          class="full-width"
        />

        <q-input
          v-model="prezime"
          label="Prezime"
          outlined
          dark
          color="grey-3"
          label-color="grey-4"
          clearable
          class="full-width"
        />

        <q-input
          v-model="email"
          label="Email"
          type="email"
          outlined
          dark
          color="grey-3"
          label-color="grey-4"
          clearable
          class="full-width"
        />

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
          label="Registracija"
          unelevated
          class="full-width q-mt-md"
          style="background-color: #ffffff; color: #000;"
          @click="registrirajKorisnika"
        />

      </q-card-section>

    </q-card>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const ime = ref('')
const prezime = ref('')
const email = ref('')
const korisnickoIme = ref('')
const lozinka = ref('')

function registrirajKorisnika() {
  if (!ime.value || !prezime.value || !email.value || !korisnickoIme.value || !lozinka.value) {
    alert('Molimo popunite sva polja')
    return
  }

  const noviKorisnik = {
    ime: ime.value,
    prezime: prezime.value,
    email: email.value,
    korisnicko_ime: korisnickoIme.value,
    lozinka: lozinka.value
  }

  console.log('Registriran korisnik:', noviKorisnik)
  alert('Registracija uspješna!')

  ime.value = ''
  prezime.value = ''
  email.value = ''
  korisnickoIme.value = ''
  lozinka.value = ''
}
</script>