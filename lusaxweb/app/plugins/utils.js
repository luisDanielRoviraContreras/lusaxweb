import Vue from 'vue'

// const config = require('../../nuxt.config.js')

Vue.prototype.$dev = (process.env.NODE_ENV !== 'production')
Vue.prototype.$https = 'https://lusaxweb.surge.sh/'

Vue.prototype.$toggleClass = (evt, classx, el) => {
  let element = document.querySelector('.mouse')
  if(el) {
    element = el
  }
  element.classList.add(classx)

  function mouseleavex() {
    element.classList.remove(classx)
  }

  evt.target.addEventListener('mouseleave', mouseleavex)
}

Vue.prototype.$setCssVar = (propertyName, value) => {
  document.documentElement.style.setProperty(propertyName, value);
}

Vue.prototype.$stickyMove = (evt, selector = 'span', parent = null) => {
  let el = evt.target
  let child = evt.target.querySelector(selector)
  let one = true
  const transitionEl = window.getComputedStyle(el).getPropertyValue('transition')
  const transitionChild = window.getComputedStyle(child).getPropertyValue('transition')

  let x = evt.target.offsetWidth / 30
  let y = evt.target.offsetHeight / 30

  function mousemovex (e) {
    if (one) {
      if (parent) {
        el.style.transition = `${transitionEl}, transform .2s ease`
      }
      child.style.transition = `${transitionChild}, transform .2s ease`
    } else {
      if (parent) {
        el.style.transition = `${transitionEl}, transform 0s ease`
      }
      child.style.transition = `${transitionChild}, transform 0s ease`
    }

    child.style.transform = `translate(${(e.offsetX - el.offsetWidth / 2) / x}px, ${(e.offsetY - el.offsetHeight / 2) / y}px)`

    if (parent) {
      el.style.transform = `translate(${(e.offsetX - el.offsetWidth / 2) / (x * 1.5)}px, ${(e.offsetY - el.offsetHeight / 2) / (y * 1.5)}px)`
    }
  }

  el.addEventListener('mousemove', mousemovex)

  setTimeout(() => {
    one = false
  }, 200)

  function mouseleavex () {
    // let elements = [child, el]
    // elements.forEach((elx, index) => {
    if (parent) {
      el.style.transition = `${transitionEl}, transform .2s ease`
      el.style.transform = `translate(0px, 0px)`
    }

    child.style.transition = `${transitionChild}, transform .2s ease`
    child.style.transform = `translate(0px, 0px)`

    setTimeout(() => {
      if (parent) {
        el.style.transition = transitionEl
      }
      child.style.transition = transitionChild

      el.removeEventListener('mouseleave', mouseleavex)
      el.removeEventListener('mousemove', mousemovex)
    }, 200)
    // })
  }

  el.addEventListener('mouseleave', mouseleavex)
}
