<template>
  <v-app-bar  
    height="180"
    class="overflow-visible pb-4"
    :style="{ background: 'linear-gradient(to right, #C2E9FB 0%, #F1B7EF 20%, #F1B7EF 50%, #F1B7EF 80%, #C2E9FB 100%)',
      color: 'white',
      boxShadow: '0 5px 20px -10px rgba(250,250,250,10)' }"
  >
    <v-container fluid>
      <v-row no-gutters class="justify-center">
        <!-- Título e imagem -->
        <v-col cols="12" class="d-flex justify-center align-center position-relative mb-4">
          <h1
            class="text-white text-h1 ma-0 z-index-1 font-italic font-weight-bold"
            style="position: relative; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); translate: -5%"
          >
            Suki🎔Anime
          </h1>

          <v-img
            src="@/assets/icons/Logo.png"
            height="140"
            width="140"
            class="position-absolute z-index-2 iconHover"
            :style="{ left: 'calc(48% + 260px)', top: '50%', transform: 'translateY(-50%)' }"
            cover
          />
          <v-sheet
            class="position-absolute"
            :style="{
              top: 'calc(16.5% + 80px)',
              left: '47%',
              transform: 'translateX(-41%)',
              width: '680px',
              height: '6px',
              backgroundColor: 'white',
              borderRadius: '3px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
            }"
          />
        </v-col>
        <!-- Botões abaixo -->
        <v-col cols="12" class="d-flex justify-center flex-wrap"
        :style="{
              transform: 'translateX(1.5%)'
            }">
          <v-btn
            v-for="btn in ['Home', 'Calendary', 'List', 'News', 'About']"
            :key="btn"
            color="white"
            height="50"
            class="mx-3 my-2 custom-btn"
            variant="outlined"
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
.custom-btn
  border-width: 3px
  box-shadow: 2px 2px 4px rgba(0,0,0,0.5)
  text-shadow: 1px 1px 2px #000
  font-size: 20px
  background: linear-gradient(to top, #E5717F, #C9D970)
  transition: all 0.3s ease

.custom-btn:hover
  background: linear-gradient(to top, rgba(194, 263, 271, 1), rgba(261, 183, 259, 1))
  color: black
  transform: scale(1.05)
</style>