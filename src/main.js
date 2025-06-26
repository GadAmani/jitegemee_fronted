// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'//state management

import App from './App.vue'
import router from './router'

//Verify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
    defaultSet: 'mdi', //This is already the default value -only for display
}
})
const app = createApp(App)//important line

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')//important line : put it on the browser
