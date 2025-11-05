
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fa42Group  } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Hero from './components/Hero.vue';
library.add(fa42Group , faBars )
</script>

<template>
    <header class="z-10 fixed flex justify-between inset-0 h-15 bg-opacity w-full">
      <div class="absolute z-9 rounded-3xl bg-linear-to-r from-green-400 via-black to-blue-600 w-1/2 h-1/3 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:w-[110%] transition-width duration-300"></div>
      <div class="content-center  font-mono text-xl p-2 bg-clip-text text-transparent bg-linear-to-r from-green-400 to-blue-600 font-extrabold"><p class="border">sebDEv</p></div>
      <div class="size-10 absolute  left-1/2 -translate-x-1/2 border rounded border-black bg-conic from-green-400 to-blue-700"></div>
      <div class= "flex items-center justify-evenly size-15 bg-linear-to-r bg-clip-text from-green-400 to-blue-600 h-full text-white">   
        <FontAwesomeIcon class="size-1/2!  content-center  " :icon="faBars" />
      </div>
    </header>
  <div class="text-black text-4xl px-5 py-10 w-full h-full flex flex-col text-primary">
    <Hero />
  </div>
  
</template>

<style scoped>

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
