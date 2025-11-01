  
 <script setup>
 import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCss3Alt,
  faFontAwesome,
  faHtml5,
  faReact,
  faSquareJs,
  faVuejs
} from '@fortawesome/free-brands-svg-icons'
library.add(faCss3Alt, faFontAwesome, faHtml5, faReact, faSquareJs, faVuejs)
 </script>

 <template>
    <div class=" flex flex-col gap-10 h-full items-center py-8!  w-full text-left text-blue-100  bg-transparent px-4!">
      <p class=" bg-linear-to-r  from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold text-4xl content-center text-center">webDEvelopment</p>
      <div class="flex flex-col items-center w-full border justify-center gap-10 sm:flex-col lg:flex-row">
      <div class="bml  max-w-[400px]  w-full flex flex-col justify-start p-1! items-start  rounded-tl-[100px]   rounded-br-[100px] ">
        <div class="bm relative  bg-primary w-full h-full">
          <div class=" bg-opacity w-full h-full flex flex-col items-center p-5! justify-start" >
            <div class="gap-1 flex flex-col w-full justify-center items-center">
            <div class="bulb"></div>
            <p class="font-bold text-[1rem] text-shadow-md">Languages</p>
            <P class="text-[.8rem] text-gray-500">Tsopdieu Sebastien</P>
            </div>
          <div class="flex flex-col items-start justify-center font-bold  w-[70%] text-xl">
            <div class="flex items-center justify-between w-full">
              <p>HTML</p>
              <FontAwesomeIcon class="text-green-700" :icon="['fab', 'html5']" />

            </div>
            <div class="flex items-center justify-between w-full">  
              <p>CSS</p>
              <FontAwesomeIcon class="text-red-600" :icon="['fab', 'css3-alt']" />

            </div>
            <div class="flex items-center justify-between w-full">
              <p>JS</p>
              <FontAwesomeIcon  class="text-yellow-500":icon="['fab', 'square-js']" />

            </div>
            <div class="flex items-center justify-between w-full">
              <p>REACT</p>
              <FontAwesomeIcon class="text-red-600" :icon="['fab', 'react']" />

            </div>
            <div class="flex items-center justify-between w-full">
              <p>VUE</p>
              <FontAwesomeIcon class="text-green-700" :icon="['fab', 'vuejs']" />
            </div>
          </div>
          </div>
        </div>
      </div>
      <div class="border w-full">
 <div class="text-blue-200 text-4xl ">
    <FontAwesomeIcon :icon="['fab', 'react']" />
    <FontAwesomeIcon :icon="['fab', 'html5']" />
    <FontAwesomeIcon :icon="['fab', 'css3-alt']" />
    <FontAwesomeIcon :icon="['fab', 'square-js']" />
    <FontAwesomeIcon :icon="['fab', 'vuejs']" />
  </div></div>
      <div class="border w-full max-w-[400px] min-h-[250px]">

      </div>
      </div>
    </div>
    <div class="">
      <div><p></p></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
 </template>

 
 <style scoped>
 @import url('https://fonts.cdnfonts.com/css/dilo-world');
 .ff{
  width:40px; height: 40px;
 }
 .bulb {
    position: relative;
     width: 70px;
     height:70px;
     background: conic-gradient( at 50% 50%,transparent, red, orange, yellow, green, blue, indigo, violet,transparent);
     border-radius:50%;
     box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
   }
   .bulb::before {
     content: 'TS';
     display: flex;
     align-items: center; justify-content: center;
     font-size: 2rem;
     letter-spacing: 5px;
     color:rgb(7, 8, 68);
     font-family:'dilo world','dilo world', Gabriola;
     font-weight:bold ;
     position: absolute;
     inset: 3px;
     background: aliceblue;
     border-radius: 50%;
   }
 .bml{
  position: relative;
  background-color: aliceblue;
  overflow:hidden ;
 }

.bm{
  border-radius: inherit;
}
    .bml::before{
      position: absolute;
      padding: 3px;
      content:'';
      z-index: 0;
      inset: 0;
      top: 50%;
      width: 10000px; height: 10000px;
      border-radius: inherit;
      left: 50%;
      transform: translate(-50%, -50%);
      transform-origin: center;
      padding: 10px; /* controls border thickness */
      background:conic-gradient(
        aliceblue, red, orange, yellow, green, blue, pink, violet,aliceblue
      );
      animation: spin 5s infinite linear;
    }
   @keyframes spin {
  from {
    transform:translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform:translate(-50%, -50%) rotate(360deg);
  }
}


 </style>