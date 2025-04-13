<template>
  <v-app-bar  
    ref="appBar"
    height="180"
    class="custom-app-bar overflow-visible pb-4 logo-title"
    :class="{ shrunk: isShrunk }"
    @mouseenter="resetShrink"
    @mouseleave="handleScroll"
    :style="{ background: 'linear-gradient(to right, #C2E9FB 0%, #F1B7EF 20%, #F1B7EF 50%, #F1B7EF 80%, #C2E9FB 100%)',
      color: 'white',
      boxShadow: '0 5px 20px -10px rgba(250,250,250,10)',
      border: '0.2px double #C2E9FB' }"
  >
    <v-container fluid>
      <v-row no-gutters class="justify-center">
        <!-- Título e imagem -->
        <v-col cols="12" class="d-flex justify-center align-center position-relative mb-4">
          <h1
            class="text-white text-h1 ma-0 z-index-1 font-italic font-weight-bold logo-title"
            :class="{ small: isShrunk }"
            style="position: relative; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); translate: -5%;"
          >
            Suki🎔Anime
          </h1>

          <v-img
            src="@/assets/icons/Logo.png"
            :height="isShrunk ? 80 : 140"
            :width="isShrunk ? 80 : 140"
            class="position-absolute z-index-2 iconHover"
            :style="{
              left: 'calc(48% + 260px)',
              top: '50%',
              transform: isShrunk ? 'translateY(-110%) translateX(-215%) scale(0.6)' : 'translateY(-50%)',
              transition: 'all 0.5s ease'
            }"
            cover
            />
            <v-sheet
              class="position-absolute"
              :class="{ small: isShrunk }"
              :style="{
                top: 'calc(16.5% + 80px)',
                left: '47%',
                transform: isShrunk ? 'translateY(-1330%) translateX(-43%) scale(0.33)' : 'translateX(-41%)',
                transition: 'all 0.5s ease',
                width: '680px',
                height: '6px',
                backgroundColor: 'white',
                borderRadius: '3px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
              }"
            />
        </v-col>
        <!-- Botões abaixo -->
        <transition name="btn-slide" appear>
          <v-col
            v-if="!isShrunk"
            key="btns"
            cols="12"
            class="d-flex justify-center flex-wrap"
            :style="{
              transform: 'translateX(0.5%)'
            }"
          >
            <v-btn
              v-for="btn in ['Home', 'Calendary', 'List', 'News', 'About']"
              :key="btn"
              :to="routesMap[btn]"
              color="white"
              height="50"
              class="mx-3 my-2 custom-btn"
              variant="outlined"
              router
            >
              {{ btn }}
            </v-btn>
          </v-col>
        </transition>
      </v-row>
    </v-container>
  </v-app-bar>
    <v-main>
      <slot></slot>
    </v-main>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const routesMap = {
  Home: '/',
  Calendary: '/calendary',
  List: '/list',
  News: '/news',
  About: '/about'
}

const isShrunk = ref(false)
const appBar = ref(null)

const handleScroll = () => {
  isShrunk.value = window.scrollY > 3
}

const resetShrink = () => {
  isShrunk.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
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

.custom-app-bar
  transition: all 0.5s ease
  height: 180px

.custom-app-bar.shrunk
  height: 80px
  padding-bottom: 0 !important
  


.logo-title
  transition: all 0.5s ease

.logo-title.small
  font-size: 32px !important
  transform: translateY(-20px)
  height: 80px !important
  

.btn-slide-enter-active
  transition: all 0.8s ease

.btn-slide-leave-active
  transition: all 0s ease
  opacity: 0

.btn-slide-enter-from
  transform: translateY(40px) scale(0.8)
  opacity: 0

.btn-slide-enter-to
  transform: translateY(10px) scale(1)
  opacity: 1

.btn-slide-leave-to
  transform: translateY(40px) scale(0.8)
  opacity: 0

</style>