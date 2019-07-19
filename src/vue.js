import { initMixin } from "./init"
export default function Vue() {
  if (!(this instanceof Vue)) {
    console.warn(
      "Vue is a constructor and should be called with the `new` keyword"
    )
  }
  this._init()
}

initMixin(Vue)
