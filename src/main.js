import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faQq } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowLeft, faGithub, faQq, faEnvelope)
library.add(faClock)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router).mount('#app')
