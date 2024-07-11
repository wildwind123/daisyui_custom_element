import { defineCustomElement } from 'vue'
import AppCe from './App.ce.vue'

const customEl = defineCustomElement(AppCe)

customElements.define('custom-element', customEl)
