import { defineNuxtPlugin } from '#app'
import VueScrollTo from 'vue-scrollto'

interface ScrollToOptions {
  offset?: number;
  easing?: string;
  [key: string]: any; 
}
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      scrollTo: (element: string | HTMLButtonElement, duration: any, options?: ScrollToOptions) => VueScrollTo.scrollTo(element, duration, options),
    }
  }
  
})
