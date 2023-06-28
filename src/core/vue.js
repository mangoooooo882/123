import { createApp } from "vue"
import { createPinia } from 'pinia'


export default () => {
    console.log ('vue lint')
 const vue = createApp({})
 const pinia = createPinia()

 vue.use(pinia)
}