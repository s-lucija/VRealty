<template>
  <q-page class="q-pa-md bg-grey-9 text-grey-2">

    <h4 class="text-h5 text-white text-center q-mb-lg">
      Pretraživanje virtualnih obilazaka
    </h4>

    <div class="row items-center q-gutter-sm" style="max-width: 1000px; margin: 0 auto; flex-wrap: wrap;">

      <q-input
        v-model="searchQuery"
        label="Unesi pojam za pretraživanje"
        outlined
        dense
        clearable
        class="col white-input"
        placeholder="Upiši naziv ili nekretninu"
      />

      <q-option-group
        v-model="searchBy"
        :options="searchOptions"
        type="radio"
        inline
        color=white
        class="q-ml-md"
      />

      <q-btn
        label="Traži"
        color="white"
        text-color="black"
        unelevated
        class="q-ml-md"
        @click="searchObilasci"
      />
    </div>

    <div class="row q-gutter-md justify-center q-mt-lg">
      <q-card
        v-for="obilazak in filteredObilasci"
        :key="obilazak.id"
        class="my-card col-12 col-sm-6 col-md-4"
        bordered
        flat
      >
        <img
          :src="obilazak.slika"
          :alt="obilazak.naziv"
          style="width: 100%; height: 250px; object-fit: cover; object-position: center; background-color: #111;"
        />

        <q-card-section>
          <div class="text-h6 text-white q-mb-xs">{{ obilazak.naziv }}</div>
          <div class="text-subtitle2 text-grey-3 q-mb-sm">{{ obilazak.nekretnina }}</div>
          <div class="text-body2 text-grey-2 q-mb-sm">{{ obilazak.opis }}</div>

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

  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const obilasci = ref([])
const filteredObilasci = ref([])
const searchQuery = ref('')
const searchBy = ref('naziv')

const searchOptions = [
    { label: 'Po nazivu', 
    value: 'naziv' },
    { label: 'Po nekretnini', 
    value: 'nekretnina' }
]

onMounted(() => {
  loadObilasci()
})

async function loadObilasci() {
  try {
    const result = await axios.get('http://localhost:3000/api/virtualni-obilasci')
    obilasci.value = result.data
    filteredObilasci.value = [...obilasci.value]
  } catch (error) {
    console.error(error)
  }
}

function searchObilasci() {
  const query = searchQuery.value.toLowerCase()
  if (!query) {
    filteredObilasci.value = [...obilasci.value]
    return
  }
  filteredObilasci.value = obilasci.value.filter(o =>
    o[searchBy.value].toLowerCase().includes(query)
  )
}
</script>

<style scoped>
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

.white-input >>> .q-field__control,
.white-input >>> .q-field__native,
.white-input >>> .q-field__label,
.white-input >>> .q-field__placeholder {
  color: white !important;
}

</style>