export function initMixin(Vue) {
  Vue.prototype._init = function() {
    console.log("init")
  }
}
