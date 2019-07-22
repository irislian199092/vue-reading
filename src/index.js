import Vue from "vue"

let app = new Vue({
  el: "#app",
  mounted() {
    console.log(this)
  },
  data: {
    message: "00"
  }
})
