<template>
</template>

<script>
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

export const ReactIcon = {
  components: { FontAwesomeIcon },
  template: `<FontAwesomeIcon :icon="['fab', 'react']" />`
}

export const HtmlIcon = {
  components: { FontAwesomeIcon },
  template: `<FontAwesomeIcon :icon="['fab', 'html5']" />`
}

export const CssIcon = {
  components: { FontAwesomeIcon },
  template: `<FontAwesomeIcon :icon="['fab', 'css3-alt']" />`
}

export const JsIcon = {
  components: { FontAwesomeIcon },
  template: `<FontAwesomeIcon :icon="['fab', 'square-js']" />`
}

export const VueIcon = {
  components: { FontAwesomeIcon },
  template: `<FontAwesomeIcon :icon="['fab', 'vuejs']" />`
}
</script>
