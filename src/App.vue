
<script setup>
import Intro from './components/intro.vue';

</script>

<template>
  <div class="text-black w-full h-full flex gap-1 bg-primary !p-2" > 
       <div class="border border-l w-[18rem] flex flex-col  h-full  gap-10 !p-2">
      <div class=" w-full flex flex-col justify-start items-center gap-4">
        <div class=" bulb "></div>
      <p class="text-blue-200  font-bold text-lg">Tsopdieu Sebastien</p>
      </div>
      <nav class="w-full">
        <ul class="flex flex-col font-bold   text-lg items-start  gap-4 mt-8 w-full text-white">
        <li class="">About</li>
        <li class="">Projects</li>
        </ul>
      </nav>
    </div>
    <div class="w-full flex !px-5 flex-col h-full bg-opacity border justify-center items-center border-blue-900  overflow-scroll scroll-auto rounded">
      <div class="w-full h-full ">
          <Intro />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-blue {
  background-color: #030916; 
}
.b{
  position: relative;
  padding-left: 25px;
}
.b::before{    
  content:'';
  color: #030916;
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  border-radius: 50%;
  left:5px; 
  width:10px;
  height: 10px;
  background-color:aliceblue;
}


   .bulb {
      position: relative;
     width: 100px;
     height: 100px;
     background: conic-gradient( at 50% 50%,transparent, red, orange, yellow, green, blue, indigo, violet,transparent);
     border-radius:50%;
     box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
     animation: spin 10s infinite linear;
   }
   .bulb::before {
     content: 'TS';
     align-content: center;
     font-size: 2.6rem;
     letter-spacing: 5px;
     color:rgb(7, 8, 68);
     font-family:'dilo world','dilo world', Gabriola;
     font-weight:bold ;
     position: absolute;
     inset: 3px;
     background: aliceblue;
     border-radius: 50%;
     animation: spin 10s infinite linear  reverse ;
   }
   @keyframes spin {
     0% {
       transform: rotate(0deg);
     }
     100% {
       transform: rotate(360deg);
     }
   }
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow( 11rem 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 -11rem 2em #42b883aa);
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
