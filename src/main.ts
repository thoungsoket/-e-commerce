import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CategoryComponent from "@/components/CategoryComponent.vue";
import PosterComponent from "@/components/PosterComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";


createApp(App)
  .component("CategoryComponent",CategoryComponent)
  .component("PosterComponent",PosterComponent)
  .component("ButtonComponent",ButtonComponent)
  .mount('#app')

