<template>
  <q-page class="q-pa-lg flex flex-center column bg-grey-9 text-grey-2">

    <div class="text-center q-mb-xl">
      <h1 class="text-h3 text-white q-mb-md">Dobrodošli u VRealty</h1>
      <p class="text-grey-3 q-mb-md">
        Istražite virtualne obilaske nekretnina i pronađite svoj savršeni dom uz našu jednostavnu i interaktivnu aplikaciju.
      </p>
    </div>

    <div class="flex flex-center q-mb-xl">
      <img
        src="https://eac.com.au/wp-content/uploads/sites/3/2018/01/estate-agents-cooperative-eac-homepage-services-immoviewer-360-virtual-reality-property-real-estate-viewings-tours.jpg"
        alt="Virtualni obilazak"
        style="max-width: 600px; width: 100%; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.5);"
      />
    </div>

    <q-btn
      label="Pogledaj nove obilaske"
      icon="new_releases"
      unelevated
      color="white"
      text-color="black"
      class="q-mt-md"
      to="/novi-obilasci"
    />

  </q-page>
</template>

<script setup>
//
</script>

<style scoped>
q-page {
  min-height: 100vh;
}
</style>