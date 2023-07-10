import { createApp } from 'vue'
import { createPinia } from 'pinia'

const app = createApp({})
const pinia = createPinia()

app.use(pinia)

// 在这里添加你的其他组件和配置

app.mount('#app') // 将应用程序挂载到具体的 DOM 元素上，其中 '#app' 是一个具体的选择器，表示你想要挂载的 DOM 元素

console.log('vuelint')
