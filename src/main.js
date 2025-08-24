import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import Ripple from 'primevue/ripple'
import VueTypedJs from 'vue3-typed-js'
import Badge from 'primevue/badge'

app.component('Button', Button)
app.component('Menubar', Menubar)
app.component('Badge', Badge)

app.use(VueTypedJs)
app.directive('ripple', Ripple)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true })

app.mount('#app')
