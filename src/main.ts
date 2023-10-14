import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Oruga from '@oruga-ui/oruga-next';
import { bulmaConfig } from '@oruga-ui/theme-bulma'
import '@oruga-ui/theme-bulma/dist/bulma.css'

import '@/styles/theme.scss'

const appThemeConfig = {
  ...bulmaConfig
}

const app = createApp(App)
app.use(Oruga, appThemeConfig)
app.use(router)

app.mount('#app')
