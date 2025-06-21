import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

// Vuetify
import 'vuetify/styles'

const app = createApp(App)

// const vuetify = createVuetify({
//     components,
//     directives,
// })

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')


