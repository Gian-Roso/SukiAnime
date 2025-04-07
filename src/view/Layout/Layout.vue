<template>
  <v-app-bar  
    height="180"
    class="ColorBack overflow-visible pb-4"
  >
    <v-container fluid>
      <v-row no-gutters class="justify-center">
        <!-- Título e imagem -->
        <v-col cols="12" class="d-flex justify-center align-center position-relative mb-4">
          <h1
            class="text-white text-h1 ma-0 z-index-1 font-italic font-weight-bold"
            style="position: relative; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"
          >
            Suki🎔Anime
          </h1>

          <v-img
            src="@/assets/icons/Logo.png"
            height="140"
            width="140"
            class="position-absolute z-index-2"
            :style="{ left: 'calc(50% + 260px)', top: '50%', transform: 'translateY(-50%)' }"
            cover
          />
          <v-sheet
            class="position-absolute"
            :style="{
              top: 'calc(16.5% + 80px)',
              left: '50%',
              transform: 'translateX(-41%)',
              width: '680px',
              height: '6px',
              backgroundColor: 'white',
              borderRadius: '3px'
            }"
          />
        </v-col>
        <!-- Botões abaixo -->
        <v-col cols="12" class="d-flex justify-center flex-wrap"
        :style="{
              transform: 'translateX(4%)'
            }">
          <v-btn
            v-for="btn in ['Home', 'Calendary', 'List', 'News', 'About']"
            :key="btn"
            color="white"
            height="50"
            class="mx-3 my-2"
            variant="outlined"
            style="border-width: 3px;"
          >

            {{ btn }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>


<script setup>
// Nenhum script necessário
</script>

<style scoped lang="sass">
  .ColorBack
    background: linear-gradient(to right, #C2E9FB, #F1B7EF, #C2E9FB)
    color: white
</style>
