import Vue from 'vue'
import App from './App.js'

import './assets/main.scss'

new Vue({
  render (h) {
    return (
      <div class="container">
        <App />
      </div>
    )
  }
}).$mount('#app')