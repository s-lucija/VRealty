<template>
  <q-page padding class="bg-grey-9 text-grey-2">

    <h4 class="text-h5 text-white text-center q-mb-lg">
      Zadnji dodani virtualni obilasci
    </h4>

    <div class="row q-gutter-md justify-center">
      <q-card
        v-for="obilazak in zadnjaTri"
        :key="obilazak.id"
        class="my-card col-12 col-sm-6 col-md-4"
        bordered
        flat
      >
        <img
          v-if="obilazak.slika"
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

const zadnjaTri = ref([])

onMounted(() => {
  loadZadnjaTri()
})

async function loadZadnjaTri() {
  try {
    const result = await axios.get('http://localhost:3000/api/virtualni-obilasci-zadnja-tri')
    zadnjaTri.value = result.data
  } catch (error) {
    console.error("Greška pri dohvaćanju zadnja tri obilaska:", error)
  }
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
</style>