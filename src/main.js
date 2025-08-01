import { createApp } from 'vue'
import App from './App.vue'

import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/es'
import '@quasar/extras/material-icons/material-icons.css'

const app = createApp(App)

app.use(Quasar, {
  plugins: {},
  lang: quasarLang
})

app.mount('#app')

