<template>
  <div class="h-screen flex flex-col items-center justify-start gap-4">
    <!-- Gradient Title -->
    <p class="bg-linear-to-r from-green-400 to-blue-600 bg-clip-text text-transparent text-5xl font-bold px-5 font-['Dilo_World']">
      frontEnd PASSIONATED
    </p>

    <!-- Subtitle -->
    <p class="text-xl text-gray-500 px-3 text-center">
      Hi, I’m Tsopdieu Sebastien, let me transform my passion into your desires.
    </p>

    <!-- Decorative Conic Block -->
    <div class="rounded p-1 bg-[conic-gradient(from_0deg_at_center,transparent,#93c5fd,transparent,#4ade80,transparent)]">
      <div class="size-full "></div>
    </div>

    <!-- Tech Icons Section -->
    <div class="rounded-3xl  w-full p-1 bg-[conic-gradient(from_0deg_at_center,transparent,#93c5fd,transparent,#4ade80,transparent)]">
      <div class="rounded-[inherit] size-full flex items-center flex-col gap-15 bg-secondary p-5">
        <div class="rounded-[inherit]  pt-5 size-full flex gap-5  justify-center ">
            <div
          v-for="(tech, index) in techIcons"
          :key="index"
          class="size-16 flex items-center flex-col gap-1.5 justify-center rounded shadow"
        >
          <FontAwesomeIcon :icon="tech.icon" :class="tech.class + ' md:text-6xl hover:drop-shadow-[0_-3rem_5px] shadow-lg transition-drop-shadow duration-300 '" />
          <p class='text-sm text-link '>{{ tech.name }}</p>
        </div>
        
        </div>
         <button class="border border-transparent hover:border-emerald-600 self-end bg-opacity w-fit text-2xl px-10 py-2 rounded-2xl relative ">contactMe</button>

      </div>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCss3Alt,
  faHtml5,
  faReact,
  faSquareJs,
  faVuejs
} from '@fortawesome/free-brands-svg-icons'

library.add(faReact, faHtml5, faCss3Alt, faSquareJs, faVuejs)

const techIcons = [
  { name: 'HTML', icon: faHtml5, class: 'text-orange-600' },
  { name: 'CSS', icon: faCss3Alt, class: 'text-blue-600' },
  { name: 'JavaScript', icon: faSquareJs, class: 'text-yellow-400' },
  { name: 'React', icon: faReact, class: ' text-cyan-400' },
  { name: 'Vue', icon: faVuejs, class: 'text-green-500' }
]
</script>

<style scoped>
/* Optional: Add custom styles here */
</style>
