<template>
  <q-page padding class="bg-grey-9 text-grey-2">

    <h4 class="text-h5 text-white text-center q-mb-lg">
      Unos novog virtualnog obilaska
    </h4>

    <div class="q-pa-md q-gutter-md" style="max-width: 600px; margin: 0 auto;">
      <q-card flat bordered class="q-pa-md dark-card">

        <q-input 
          filled 
          v-model="id" 
          label="ID obilaska" 
          readonly 
          class="q-mb-md dark-input"
        />

        <q-input 
          filled 
          v-model="naziv" 
          label="Naziv obilaska" 
          class="q-mb-md dark-input"
        />

        <q-input 
          filled 
          v-model="nekretnina" 
          label="Nekretnina" 
          class="q-mb-md dark-input"
        />

        <q-input 
          filled 
          type="textarea" 
          v-model="opis" 
          label="Opis" 
          class="q-mb-md dark-input"
        />

        <q-input
          filled
          v-model="slika"
          label="URL slike"
          class="q-mb-md dark-input"
        />

        <div class="row q-gutter-sm justify-center q-mt-md">
          <q-btn 
            label="Spremi" 
            color="white" 
            text-color="black" 
            unelevated 
            @click="insertObilazak"
          />
          <q-btn 
            label="Odustani" 
            color="negative" 
            text-color="white"
            unelevated
            :style="{ border: '1px solid #1e1e1e' }"
            @click="odustani"
          />
        </div>

      </q-card>
    </div>

    <div v-if="noviObilazak" class="q-pa-md q-mt-lg">
      <h6 class="text-subtitle1 text-white text-center q-mb-md">Uspješno spremljeni virtualni obilazak</h6>

      <div class="row q-gutter-md justify-center">
        <q-card 
          class="my-card col-12 col-sm-6 col-md-4" 
          bordered 
          flat
        >
          <img
            v-if="noviObilazak.slika"
            :src="noviObilazak.slika"
            :alt="noviObilazak.naziv"
            style="width: 100%; height: 250px; object-fit: cover; object-position: center; background-color: #111;"
          />
          <q-card-section>
            <div class="text-h6 text-white q-mb-xs">{{ noviObilazak.naziv }}</div>
            <div class="text-subtitle2 text-grey-3 q-mb-sm">{{ noviObilazak.nekretnina }}</div>
            <div class="text-body2 text-grey-2 q-mb-sm">{{ noviObilazak.opis }}</div>
            <div class="row justify-end q-mt-sm">
              <q-btn
                label="Detalji"
                color="white"
                text-color="black"
                size="sm"
                unelevated
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const id = ref(1)
const naziv = ref('')
const nekretnina = ref('')
const opis = ref('')
const slika = ref('')
const noviObilazak = ref(null)

async function insertObilazak() {
  const formData = { id: id.value, naziv: naziv.value, nekretnina: nekretnina.value, opis: opis.value, slika: slika.value }
  try {
    const result = await axios.post('http://localhost:3000/api/unos_obilaska', formData)
    noviObilazak.value = result.data
    id.value++
    odustani()
  } catch (error) {
    console.error("Greška pri dodavanju obilaska:", error)
  }
}

function odustani() {
  naziv.value = ''
  nekretnina.value = ''
  opis.value = ''
  slika.value = ''
}
</script>

<style scoped>
.dark-card {
  background-color: #1e1e1e;
}

.dark-input >>> .q-field__control,
.dark-input >>> .q-field__native,
.dark-input >>> .q-field__label,
.dark-input >>> .q-field__placeholder {
  color: white !important;
}

.dark-input >>> .q-field--filled {
  background-color: #121212 !important;
  border: 1px solid #1e1e1e !important;
}

.my-card {
  border-radius: 12px;
  overflow: hidden;
  background-color: #1e1e1e;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.my-card:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}
</style>