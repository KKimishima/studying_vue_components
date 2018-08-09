import "./common.css"
import Vue from 'vue'
import App from './components/App'
import Children from "./components/Children"
import Parent from "./components/Parent"
import BootSVue from "./components/BootSVue"
import ParentList from './components/ParentList'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

console.log("色変更aaa")

new Vue({
  el: "#app",
  components: {App},
  template: "<app/>"
})

new Vue({
  el: "#app1",
  components: {Children},
  template: "<children/>"

})

new Vue({
  el: "#app2",
  components: {Parent},
  template: "<parent/>"
})

new Vue({
  el: "#app3",
  components: {BootSVue},
  template: "<boot-s-vue/>"
})

new Vue({
  el: "#app4",
  components: {ParentList},
  template: "<parent-list/>"
})