<template>
  <div
    class="container-view">
    <Back />

    <div v-if="awards" class="con-awards">
      <ul>
        <li
          :key="award"
          v-for="award in awards">
          <a target="_blank" :href="url">
            <img :src="`../../projects/${award}.png`" :alt="award">
          </a>
          <!-- {{ award }} -->


        </li>
      </ul>
    </div>

    <div class="progress">
        <button @click="translatex = 0"></button>
        <div
          :style="{
              width: `${percent}%`
            }"
          class="linep"></div>
        <div class="linebg"></div>

        <button class="final" @click="final"></button>
      </div>

    <div class="con-info">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"/><path d="M11 11H13V17H11zM11 7H13V9H11z"/></svg>
      </button>
      <div class="p-hidden">
        <p>
          This is a personal, non-commercial concept made with love and dedication, © Lusaxweb All Right Reserved.
        </p>
      </div>
    </div>

    <div
      @mouseenter="mouseenterOpen"
      @mouseleave="mouseleaveOpen"
      class="con-open-project">
      <a target="_blank" :href="url">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"/><path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"/></svg>
      </a>
    </div>

    <div
      @mousewheel="scrollH"
      @mousedown="mousedownx"
      @mousemove="mousemovex"
      @mouseup="mouseupx"
      class="con-images">

      <slot></slot>

      <Next :prox="prox" v-if="next" :url="next.url" :title="next.title" :img="next.img" />

    </div>
  </div>
</template>

<script>
import Next from '~/components/next'
import Back from '~/components/back'
export default {
  props:{
    next:{
      type: Object,
      default: null
    },
    awards:{
      default: null,
      type: Array
    },
    url:{
      default: null,
      type: String
    },
    prox:{
      default: false,
      type: Boolean
    }
  },
  components:{
    Next,
    Back
  },
  data:() => ({
    translatex: 0,
    percent: 0
  }),
  mounted() {
    this.smooth()
    document.addEventListener('keydown', this.keydownx)
    screen.orientation.lock('landscape')
  },
  watch: {
    translatex() {
      const element = document.querySelector('.con-images')

      this.percent = Math.ceil((this.translatex) * 100 / (element.clientWidth - window.innerWidth))
    }
  },
  methods:{
    mouseleaveOpen() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.remove('open-project')
    },
    mouseenterOpen() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.add('open-project')
    },
    keydownx(evt) {
      let keyx = evt.key
      const element = document.querySelector('.con-images')

      if(keyx == 'ArrowRight') {
        this.translatex -= -400
        if(this.translatex > element.clientWidth - window.innerWidth) {
          this.translatex = element.clientWidth - window.innerWidth
        }
      } else if (keyx == 'ArrowLeft') {
        this.translatex -= 400
        if(this.translatex < 0) {
          this.translatex = 0
        }
      }
    },
    final() {
      const element = document.querySelector('.con-images')
      this.translatex =  element.clientWidth - window.innerWidth
    },
    mousedownx(e) {
      e.preventDefault()
      setTimeout(() => {
        this.notPulse = false
      }, 20)
      if(e.type=='touchstart'){
        this.mousex = e.targetTouches[0].clientX - 200
      } else {
        this.mousex = e.clientX - 200
      }
    },
    mousemovex(e) {
      if(this.notPulse) {
        return
      }
      // }, 10)
      const element = e.target.closest('.con-images');
      const parent = element.parentNode
      let move
      if(e.type=='touchmove'){
        move = this.mousex - (e.targetTouches[0].clientX - 250)
      } else {
        move = this.mousex - (e.clientX - 250)
      }
      if(move > 40 || move < -40) {
        this.moving = true
      }
      if(move > 50) {
        this.translatex -= -80
        if(this.translatex > element.clientWidth - parent.clientWidth) {
          this.translatex = element.clientWidth - parent.clientWidth
        }
        // element.style.transform = `translate(-${this.translatex}px)`
        if(e.type=='touchmove'){
          this.mousex = (e.targetTouches[0].clientX - 250)
        } else {
          this.mousex = (e.clientX - 250)
        }
      } else if (move < -50) {
        this.translatex -= 80
        if(this.translatex < 0) {
          this.translatex = 0
        }
        // element.style.transform = `translate(-${this.translatex}px)`
        if(e.type=='touchmove'){
          this.mousex = (e.targetTouches[0].clientX - 250)
        } else {
          this.mousex = (e.clientX - 250)
        }
      }
    },
    mouseupx(e) {
      e.preventDefault()
      const element = e.target.closest('.con-images');
      const parent = element.parentNode

      if(this.translatex < 0) {
        this.translatex = 0
      }

      if(this.translatex > element.clientWidth - parent.clientWidth) {
        this.translatex = element.clientWidth - parent.clientWidth
      }

      this.mousex = 0
      this.notPulse = true
      setTimeout(() => {
        this.moving = false
      }, 1);

    },
    smooth() {
      const element = document.querySelector('.con-images'),
      speed = 0.08

      var raf

      var offset = 0

      let _this = this
      function smoothScroll() {
        let leftx = _this.translatex
        offset += (leftx - offset) * speed

        var scroll = "translateX(-" + offset + "px) translateZ(0)"
        element.style.transform = scroll

        raf = requestAnimationFrame(smoothScroll)
      }
      smoothScroll()
    },
    scrollH(e) {
      this.scrolling = true
      let _this = this
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      const element = e.target.closest('.con-images');
      const parent = element.parentNode
      if (delta == 1 && this.translatex > 0) {

        this.translatex -= 250
        if(this.translatex < 0) {
          this.translatex = 0
        }

      } else if (delta == -1 && this.translatex < (element.clientWidth - parent.clientWidth)) {
        this.translatex += 250
        if(this.translatex > element.clientWidth - parent.clientWidth) {
          this.translatex = element.clientWidth - parent.clientWidth
        }
      }
      e.preventDefault();
    },
  }
}
</script>
<style lang="stylus">
@import('../../style/mixin')

.con-open-project
  position absolute
  bottom 10px
  right 10px
  padding 10px
  z-index 2000

  transition all .25s ease
  &:hover
    opacity 0
  a
    padding 10px
    margin 15px
    display block
    fill getColor('color')

.con-info
  position absolute
  left 10px
  bottom 10px
  z-index 2000
  &:hover
    .p-hidden
      max-width 400px

    p
      opacity 1
      visibility visible
    button
      opacity .5
  button
    background transparent
    border 0px
    color getColor('color')
    padding 10px
    margin 15px
    transition all .25s ease

    svg
      fill getColor('color')
  .p-hidden
    max-width 0px
    transition all .25s ease
    overflow hidden
    display block
    position absolute
    bottom 0px
    left 60px
  p
    visibility hidden
    opacity 0
    width 400px
    font-size .6rem
    position relative

    color getColor('color')
    transition all .25s ease
    padding 10px


.con-awards
  position absolute
  top 0px
  right 30px
  z-index 200
  ul
    display flex
    align-items center
    justify-content center
    li
      padding 0px 5px
      transition all .25s ease
      transform translate(0,-8px)
      &:hover
        transform translate(0,0px)
      img
        max-width 40px

.heightx
  img
    min-height 100vh !important

.max
  img
    max-width 600px !important

.maxlg
  img
    max-width 1000px !important

.maxls
  img
    max-width 400px !important

.absolutex
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -50%)

.bottomx
  display flex
  align-self flex-end
  transform translate(0,30px) !important


.topx
  display flex
  align-self flex-start
  transform translate(0,-30px) !important

.centerx
  transform translate(0) !important

.progress
  left 50%
  bottom 0px
  padding 20px
  width 300px
  position absolute
  box-sizing border-box
  transform translate(-50%)
  z-index 500
  &:hover
    button
      height 20px
      opacity 1
  button
    position absolute
    top 0px
    left -10px
    width 20px
    height 0px
    opacity 0
    transition all .25s ease
    border 0px
    background transparent
    display flex
    align-items center
    justify-content center
    &:after
      content ''
      width 1px
      height 10px
      background getColor('color', .2)
      position relative
      display block
      transition all .25s ease
    &:before
      content ''
      width 3px
      height 3px
      top 0px
      background getColor('color', .4)
      position absolute
      display block
      transition all .25s ease
    &:hover
      &:after
        width 10px
        background getColor('color', 1)
    &.final
      right -10px
      left auto
  .linep
    width 0%
    background getColor('color', 1)
    height 1px
    position absolute
    left 0px
    transition all .25s ease
  .linebg
    width 100%
    background getColor('color', .02)
    height 1px
    position absolute
    left 0px



.container-view
  width 100%
  height 100%
  position fixed
  left 0px
  top 0px
  z-index 4000
  background getColor('bg', 1)
  .con-images
    position absolute
    height 100%
    display flex
    align-items: center;
    overflow hidden
    img
      pointer-events none
      max-width 100vw
      max-height 90vh
    video
      max-height 90vh
    .imagex
      margin 0px 150px
      position relative
      display block
      max-width 100vw
      .img-fixed
        width 500px
        height 100vh
        overflow hidden
        position relative
        img
          height 100%
          transition all .25s ease
</style>
