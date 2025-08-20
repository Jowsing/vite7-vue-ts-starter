import 'virtual:uno.css'

import App from './App.vue'

import router from '@/router/index'

const app = createApp(App)

app.use(router).mount('#app')
