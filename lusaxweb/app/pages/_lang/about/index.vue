<template>
  <section
    @mousewheel="mousewheelx"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
    ref="content"
    class="container notranslate">

    <ul class="ul-navigate">
      <li
        :class="{'active': active == 0}"
        @click="active = 0"></li>
      <li
        :class="{'active': active == 1}"
        @click="active = 1"></li>
      <li
        :class="{'active': active == 2}"
        @click="active = 2"></li>
      <li
        :class="{'active': active == 3}"
        @click="active = 3"></li>
    </ul>

    <h3>
      <transition name="fade-title-bg">
        <span v-if="active == 0">
          Lusaxweb
        </span>
      </transition>
      <transition name="fade-title-bg">
        <span v-if="active == 1">
          ManuelRovira
        </span>
      </transition>
      <transition name="fade-title-bg">
        <span v-if="active == 2">
          LuisDaniel
        </span>
      </transition>
      <transition name="fade-title-bg">
        <span v-if="active == 3">
          LuisManuel
        </span>
      </transition>
    </h3>

    <h2>
      <transition name="fade-title">
        <span v-if="active == 0">
          Lusax Web
        </span>
      </transition>
      <transition name="fade-title">
        <span v-if="active == 1">
          Manuel Rovira
        </span>
      </transition>
      <transition name="fade-title">
        <span v-if="active == 2">
          Luis Daniel
        </span>
      </transition>
      <transition name="fade-title">
        <span v-if="active == 3">
          Luis Manuel
        </span>
      </transition>
    </h2>
    <div class="con-lusaxweb">

      <div class="linea1" />
      <div class="linea2" />
      <div class="linea3" />
      <div class="linea4" />

      <div class="con-image">

        <div class="punto1 punto" />
        <div class="punto2 punto" />
        <div class="punto3 punto" />
        <div class="punto4 punto" />

        <!-- <transition name="fade-title"> -->
          <div
            @mouseenter="mouseenterx"
            @mouseleave="mouseleavex"
            @click="$router.push(`${$i18n.path('about/lusaxweb')}`)"
            :class="{'active': active == 0}"
            data-image1="../back7.png"
            data-image2="../locas/4.jpg"
            data-back="../locas/9.jpg"
            class="content-img lusaxweb">
            <!-- <img src="../item5.png" alt="item"> -->
          </div>
          <!-- <div class="content-img2">
            <img ref="blur" src=../item5.png" alt="item">
          </div> -->
        <!-- </transition> -->

        <!-- <transition name="fade-title"> -->
          <div
            @mouseenter="mouseenterx"
            @mouseleave="mouseleavex"
            @click="$router.push(`${$i18n.path('about/manuel')}`)"
            :class="{'active': active == 1}"
            data-image1="../about/manuel1.jpg"
            data-image2="../about/manuel2.jpg"
            data-back="../locas/11.jpg"
            class="content-img manuel">
            <!-- <img src="../item5.png" alt="item"> -->

          </div>

          <div
            @mouseenter="mouseenterx"
            @mouseleave="mouseleavex"
            @click="$router.push(`${$i18n.path('about/luisdaniel')}`)"
            :class="{'active': active == 2}"
            data-image1="../about/luis1.jpg"
            data-image2="../about/luis2.jpg"
            data-back="../locas/19.jpg"
            class="content-img ld">
            <!-- <img src="../item5.png" alt="item"> -->
          </div>

          <div
            @mouseenter="mouseenterx"
            @mouseleave="mouseleavex"
            @click="$router.push(`${$i18n.path('about/luismanuel')}`)"
            :class="{'active': active == 3}"
            data-image1="../about/papa1.jpg"
            data-image2="../about/papa2.jpg"
            data-back="../locas/27.jpg"
            class="content-img lmrc">
            <!-- <img src="../item5.png" alt="item"> -->
          </div>

      </div>

      <p class="p1">
          {{ getP1 }}
        </p>

        <p class="p2">
          {{ getP2 }}
        </p>
    </div>
  </section>
</template>

<script>
import { nextTick } from 'q';
export default {
  data:() => ({
    active: 0,
    s: false,
    touchStart: null,
  }),
  head () {
    return {
      title: `Lusaxweb / About`,
    }
  },
  watch:{
    active() {
      this.time = true
      setTimeout(() => {
        this.time = false

      },100)

      if(this.active == 0) {
        if(this.$store.state.invert) {
          this.$setCssVar('--color', '255,255,255')
          this.$setCssVar('--bg', '15, 15, 19')

          this.$store.state.color = '255,255,255'
          this.$store.state.bg = '15, 15, 19'
        } else {
          this.$setCssVar('--bg', '255,255,255')
          this.$setCssVar('--color', '15, 15, 19')

          this.$store.state.bg = '255,255,255'
          this.$store.state.color = '15, 15, 19'
        }
      } else {
        if(this.$store.state.invert) {
          this.$setCssVar('--bg', '255,255,255')
          this.$setCssVar('--color', '15, 15, 19')

          this.$store.state.bg = '255,255,255'
          this.$store.state.color = '15, 15, 19'
        } else {
          this.$setCssVar('--color', '255,255,255')
          this.$setCssVar('--bg', '15, 15, 19')

          this.$store.state.color = '255,255,255'
          this.$store.state.bg = '15, 15, 19'
        }
      }

      if(this.active >= 3) {
        document.querySelector('.scrolling').classList.add('hidden')
      } else {
        document.querySelector('.scrolling').classList.remove('hidden')
      }
    }
  },
  computed:{
    getP1() {
      let r = 'WEB / UI / UX / DEV'
      if (this.active == 1) {
        r = 'UI / UX / IN / XD'
      } else if (this.active == 2) {
        r = 'JS / CSS / VUE / REACT'
      } else if (this.active == 3) {
        r = 'PHP / LARABEL / VUE / SQL'
      }
      return r
    },
    getP2() {
      let r = 'DESIGNER / FRONTEND / BACKEND'
      if (this.active == 1) {
        r = 'DESIGNER'
      } else if (this.active == 2) {
        r = 'FRONTEND'
      } else if (this.active == 3) {
        r = 'BACKEND'
      }
      return r
    }
  },
  mounted() {
    document.querySelector('.scrolling').classList.add('active')
    this.$nextTick(() => {
      document.querySelector('.menu').classList.add('transparentx')
    })

    if(this.$store.state.invert) {
      this.$setCssVar('--color', '255,255,255')
      this.$setCssVar('--bg', '15, 15, 19')

      this.$store.state.color = '255,255,255'
      this.$store.state.bg = '15, 15, 19'
    } else {
      this.$setCssVar('--bg', '255,255,255')
      this.$setCssVar('--color', '15, 15, 19')

      this.$store.state.bg = '255,255,255'
      this.$store.state.color = '15, 15, 19'
    }

    // this.setCssVariable('--color', '15, 15, 19')
    // this.setCssVariable('--bg', '255, 255, 255')

    // this.$store.state.color = '15, 15, 19'
    // this.$store.state.bg = '255, 255, 255'

    var hoverEffect = require('hover-effect').default

    let images = document.querySelectorAll('.content-img')

    images.forEach((item) => {
      new hoverEffect({
        parent: item,
        intensity: .5,
        image1: item.dataset.image1,
        image2: item.dataset.image2,
        displacementImage: item.dataset.back // ../locas/9.jpg | 11.jpg || 19.jpg || 27.jpg || 30.png
      });
    })

    document.addEventListener('keydown', this.keydownx)
  },
  methods: {
    // side swipe
    keydownx(evt) {
      let keyx = evt.key
      const element = document.querySelector('.con-projects-ul');
      const parent = document.querySelector('.con-projects')

      if(keyx == 'ArrowUp') {
        if (this.active > 0) {
          this.active--
        }
      } else if (keyx == 'ArrowDown') {
        if (this.active < 3) {
          this.active++
        }
      }
    },

    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y

      var delta = Math.max(-1, Math.min(1, dy));

      if (delta == -1) {
        if (Math.abs(dy) > 40) {
          if (this.active < 3) {
            this.active++
          }
        }
      } else if (delta == 1) {
        if (Math.abs(dy) > 40) {
          if (this.active > 0) {
            this.active--
          }
        }
      }
    },
    mouseenterx() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.add('hoverx')
    },
    mouseleavex() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.remove('hoverx')
    },
    mousewheelx(e) {
      if(this.time) return
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      if(delta == 1) {
        if (this.active > 0) {
          this.active--
        }
      } else if (delta == -1) {
        if (this.active < 3) {
          this.active++
        } else {
          this.$refs.content.classList.add('max')
        }
      }


    },
    setCssVariable(propertyName, value) {
      document.documentElement.style.setProperty(propertyName, value);
    },
  },
}
</script>

<style lang="stylus" scoped>
@import('../../../../style/mixin')

.fade-title-enter-active, .fade-title-leave-active {
  transition: transform .3s ease, opacity .3s ease;
}
.fade-title-enter  /* .fade-leave-active below version 2.1.8 */ {
  transform translate(0,-100%)
  opacity 0
}

.fade-title-leave-to {
  transform translate(0, 100%)
  opacity 0
}

.fade-title-bg-enter-active, .fade-title-bg-leave-active {
  transition: transform .3s ease, opacity .3s ease;
}
.fade-title-bg-enter  /* .fade-leave-active below version 2.1.8 */ {
  transform translate(0,100%)
  opacity 0
}

.fade-title-bg-leave-to {
  transform translate(0, -100%)
  opacity 0
}

.container
  position relative
  width 100vw
  height 100vh
  display flex
  align-items center
  justify-content center
  padding 100px 0px
  background getColor('bg', 1)
  transition all .5s ease
  h3
    font-size 20rem
    width 100%
    position absolute
    top 46%
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: getColor('color', .03);
    // text-shadow -2px -2px 0 getColor('color', .01),2px -2px 0 getColor('color', .01),-2px 2px 0 getColor('color', .01),2px 2px 0 getColor('color', .01)
    // color getColor('bg', 1)
    color transparent
    text-align center
    letter-spacing 30px
    // color rgba(0, 0, 0, 0)
    white-space: nowrap;
    z-index 100
    display flex
    align-items center
    justify-content center
    user-select none
    font-family Monument !important
    font-weight normal
    span
      position absolute
    // user-select none
.con-lusaxweb
  width 350px
  height 630px
  z-index 200
  position absolute
  .p1
    position absolute
    left -40px
    bottom 20px
    writing-mode: vertical-rl;
    letter-spacing 2px
    font-size .7rem
    color getColor('color', 1);
    font-family Poppins
  .p2
    position absolute
    right -40px
    top 20px
    writing-mode: vertical-rl;
    letter-spacing 1px
    font-size .7rem
    color getColor('color', 1);
    font-family Poppins
  .con-image
    height 100%
    width 100%
    position relative
    overflow hidden

    .punto
      position absolute
      width 3px
      height 3px
      background getColor('color', 1)
    .punto1
      left -1px
      top -1px
    .punto2
      right -1px
      top -1px
    .punto3
      right -1px
      bottom -1px
    .punto4
      left -1px
      bottom -1px

  .content-img
    margin 20px
    width calc(350px - 40px)
    height calc(630px - 40px)
    overflow hidden
    display flex
    align-items center
    justify-content center
    z-index 200
    position absolute
    top 0px
    left 0px
    opacity 1
    visibility hidden
    transition all .3s ease
    transform translate(200%)
    >>>canvas
      transform translate(-50px)
      transition all .7s ease
      display block
    &.ld
      transform translate(-200%)
      >>>canvas
        transform translate(50px)
        transition all .7s ease
        display block
    &.manuel
      transform translate(0,-200%)
      >>>canvas
        transform translate(0,50px)
        transition all .7s ease
        display block
    &.lmrc
      transform translate(0,200%)
      >>>canvas
        transform translate(0,-50px)
        transition all .7s ease
        display block
    &.active
      transform translate(0%)
      visibility visible
      opacity 1 !important
      >>>canvas
        transform translate(0px) !important
    img
      display none
  .linea1
    position absolute
    width 120vw
    transform translate(-50vw)
    height 1px
    background getColor('color', .05)
    left 0px
    top 0px
  .linea2
    position absolute
    width 1px
    height 100vh
    background getColor('color', .05)
    top 50%
    transform translate(0,-50vh)
  .linea3
    position absolute
    width 1px
    height 100vh
    background getColor('color', .05)
    top 50%
    left 0px
    transform translate(0,-50vh)
  .linea4
    position absolute
    width 100vw
    height 1px
    background getColor('color', .05)
    bottom 0px
    left 50%
    transform translate(-50vw)

h2
  position absolute
  font-size 3.5rem
  white-space: nowrap;
  letter-spacing 10px
  width 100%
  height 92px
  z-index 300
  display flex
  align-items center
  justify-content center
  overflow hidden
  top 50%
  left 50%
  transform translate(-50%, -50%)
  pointer-events none
  color getColor('color', 1);
  user-select none
  font-family Monument !important
  span
    top 0px
    position absolute

    // text-shadow 10px 10px 10px getColor('color', .05);
    b
      // color rgba(0,0,0,0)
      // -webkit-text-stroke-width: 2px;
      // -webkit-text-stroke-color: getColor('color', 1);
.ul-navigate
  position absolute
  right 0px
  z-index 400
  li
    width 3px
    height 50px
    position relative
    margin 20px
    padding 10px
    transition all .2s ease
    &:hover
      &:after
        height 0%
      &:before
        height 100%
    &.active
      &:after
        height 0%
      &:before
        height 100%
    &:after
      content ''
      width 2px
      height 100%
      position absolute
      background getColor('color', .08);
      top 0px
      transition all .25s ease
    &:before
      content ''
      width 2px
      position absolute
      height 0%
      background getColor('color', 1);
      top 50%
      transform translate(0,-50%)
      transition all .25s ease

//
@media screen and (max-width: 830px)
  .container
    h2
      span
        font-size 3rem
    h3
      span
        font-size 15rem
@media screen and (max-width: 630px)
  .con-lusaxweb
    width 300px
    height 600px
    .linea3
      transform translate(300px)
    .content-img
      height 100%
      width 100%
      margin 0px

@media screen and (max-width: 500px)
  .container
    h3
      display none
    h2
      display flex
      align-items center
      justify-content center
      height 30px
      span
        font-size 1.7rem
        white-space: wrap;
        letter-spacing 5px
  .con-lusaxweb
    width 225px
    height 437px
    .punto
      display none
    .linea1
      left 50%
      top -15px
    .linea4
      transform translate(-50vw, 15px)
    .linea2
      transform translate(15px, -50vh)
    // .linea1,.linea2,.linea3, .linea4, .linea5,
    .p1, .p2
      display none
  .ul-navigate
    li
      margin 15px 10px
      height 30px

@media screen and (max-width: 768px) and (orientation: landscape)
  .con-lusaxweb
    height calc(100% - 80px)
  .container

    h3,.p1, .p2,.linea1,.linea4
      display none
    h2
      height 30px
      span
        font-size 2rem
  .ul-navigate
    li
      margin 15px 10px
      height 30px

@media screen and (max-width: 812px) and (max-height: 500px) and (orientation: landscape)
  .con-lusaxweb
    height calc(100% - 80px)
  .container

    h3,.p1, .p2,.linea1,.linea4
      display none
    h2
      height 30px
      span
        font-size 2rem
  .ul-navigate
    li
      margin 15px 10px
      height 30px
</style>
