<template>
  <div

    @mouseover="mouseoverMenuAll"
    @mouseleave="mouseleaveMenuAll"
    :class="{'active': $store.state.activePoints}"
    class="con-points">

    <div
      @mouseenter="mouseenterLogo"
      @mouseleave="mouseleaveLogo"
      class="con-logo-points">
      <nuxt-link
        v-if="!$store.state.back"
        to="/">
        <img v-if="!getColor" src="/lusaxweb-1.png" alt="">
        <img v-else src="/lusaxweb-2.png" alt="">
      </nuxt-link>
      <div
        class="back"
        @click="$store.state.back = false"
        @mouseenter="$store.state.hoverback = true"
        @mouseleave="$store.state.hoverback = false"
        v-else>
        <i class="material-icons">
          keyboard_backspace
        </i>
        <span>
          Back
        </span>
      </div>
      <!-- loading -->
    </div>

    <div
      @click="$store.state.activePoints = false"
      @mouseenter="mouseenterx"
      @mouseleave="mouseleavex"
      class="con-menu-more--close">
        <i class="flaticon-close"></i>
        <!-- <i class="material-icons">
          clear
        </i> -->
    </div>

    <ul
      @mousemove="mousemovex"
      @mouseleave="leaveul"
      class="ulx">
      <li
        class="active"
        @mouseover="mouseoverMenu($event,1)"
        @mouseleave="mouseleaveMenu"
        >
          <nuxt-link :to="$i18n.path('')">
            Lusaxweb
          </nuxt-link>
        </li>
      <li

        @mouseover="mouseoverMenu($event,2)"
        @mouseleave="mouseleaveMenu"
        >
        <a target="_blank" href="https://lusaxweb.github.io/vuesax/">
          Vuesax
        </a>
        </li>
      <!-- <li
        @mouseover="mouseoverMenu($event,3)"
        @mouseleave="mouseleaveMenu"
        >
          <a target="_blank" href="https://mockui.lusaxweb.net">
            Mockui
          </a>
        </li> -->
      <li
        @mouseover="mouseoverMenu($event,4)"
        @mouseleave="mouseleaveMenu"
        >
          <a target="_blank" href="https://devawesome.lusaxweb.net">
            DevAwesome
          </a>
        </li>
      <li
        @mouseover="mouseoverMenu($event,4)"
        @mouseleave="mouseleaveMenu"
        >
          <a target="_blank" href="https://lusaxweb.github.io/vuttons/">
            Vuttons
          </a>
        </li>
      <li
        @mouseover="mouseoverMenu($event,4)"
        @mouseleave="mouseleaveMenu"
        >
          <a target="_blank" href="https://lusaxweb.github.io/Kursor/">
            Kursorjs
          </a>
        </li>
    </ul>

    <div class="con-correo">
      <div class="con-data">
        <h3>Email</h3>
        <p>
          lusaxweb@gmail.com
        </p>
      </div>
      <div class="con-data">
        <h3>Whatsapp</h3>
        <p>
          +58-4242844333
        </p>
      </div>
    </div>

    <div class="con-logo-x">
      <nuxt-link :to="$i18n.path('')">
        <img ref="logo" :src="`/load/${image}_opt.png`" alt="">
        <img class="logo2" ref="logo2" :src="`/load/${image}_opt.png`" alt="">
      </nuxt-link>
    </div>

    <navDownInvert />
  </div>
</template>
<script>
import navDownInvert from './navDownInvert'
export default {
  components:{
   navDownInvert
  },
  data: () => ({
    image: 1,
    max: 33
  }),
  mounted() {
    if (this.image == this.max) this.image = 0
    let ramdom = Math.round(Math.random() * (this.max - 1) + 1)
    this.image = ramdom == this.image ? this.max == ramdom ? ramdom + 1 : ramdom - 1 : ramdom
  },
  computed: {
    getColor() {
      return (this.$store.state.color == '15, 15, 19')
    }
  },
  methods:{
    mouseenterLogo() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.add('hover--logox')
    },
    mouseleaveLogo() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.remove('hover--logox')
    },
    leaveul() {
      this.$refs.logo.style.top = `50%`
      this.$refs.logo2.style.top = `50%`
    },
    mousemovex(evt) {
      let y = evt.y
      this.$refs.logo.style.top = `${y}px`
      this.$refs.logo2.style.top = `${y}px`
    },
    mouseenterx(evt) {
      let mouse = document.querySelector('.mouse')
      mouse.classList.add('points-x')


    },
    mouseleavex(evt) {
      let mouse = document.querySelector('.mouse')
      mouse.classList.remove('points-x')


    },
    mouseoverMenuAll() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.add('menu--hover-all')
    },
    mouseleaveMenuAll() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.remove('menu--hover-all')
    },
    mouseoverMenu(evt, index) {
      let mouse = document.querySelector('.mouse')
      mouse.classList.add('menu--hover')

      if (this.image == this.max) this.image = 0
      let ramdom = Math.round(Math.random() * (this.max - 1) + 1)
      this.image = ramdom == this.image ? this.max == ramdom ? ramdom + 1 : ramdom - 1 : ramdom
    },
    mouseleaveMenu(evt) {
      let mouse = document.querySelector('.mouse')
      mouse.classList.remove('menu--hover')

      if (this.image == this.max) this.image = 0
      let ramdom = Math.round(Math.random() * (this.max - 1) + 1)
      this.image = ramdom == this.image ? this.max == ramdom ? ramdom + 1 : ramdom - 1 : ramdom
    }
  }
}
</script>
<style lang="stylus" scoped>
@import('../../style/mixin')

.con-logo-points
  top 0px
  left 0px
  padding 22px
  padding-left 21px
  position absolute
  img
    max-width 150px

.con-logo-x
  position relative
  display flex
  align-items center
  justify-content center
  height 100vh
  width 25%

  border-left 1px solid getColor('bg',.05)
  img
    position absolute
    left 0px
    transform translate(-50%,-50%)
    max-width 200px
    transition all .5s ease-out
    &.logo2
      transition all .8s ease-out
      opacity .1 !important

.con-correo
  position relative
  top 0px
  color getColor('bg')
  border-left 1px solid getColor('bg',.05)
  height 100vh
  display flex
  align-items flex-start
  justify-content center
  flex-direction column
  width 25%
  .con-data
    padding 10px 0px
    margin 20px 0px
    position relative
  h3
    padding 15px 0px
    font-family poppins
    font-size 1rem
    letter-spacing 1px
    &:after
      content ''
      position absolute
      top 0px
      left 0px
      width 16px
      height 3px
      background getColor('bg')
  p
    padding 15px 0px
    font-size .8rem
    font-family poppins

.con-menu-more--close
  position absolute
  top 20px
  right 20px
  padding 20px
  transition all .25s ease
  z-index 500
  font-weight bold
  &:hover
    opacity 0
    transform scale(1.1)

.con-points
  position fixed
  z-index 4500
  left 0px
  top 0px
  width 100vw
  height 100vh
  background getColor('color',.97)
  transition all .6s ease
  opacity 0
  visibility hidden
  color getColor('bg')

  display flex
  align-items center
  justify-content space-between

  &.active
    transition all .6s ease
    opacity 1
    visibility visible
    .ulx

      li
        &:nth-child(1)
          a
            transition all .3s ease ,transform .3s ease .1s ,opacity .2s ease .1s
        &:nth-child(2)
          a
            transition all .3s ease ,transform .4s ease .2s ,opacity .3s ease .2s
        &:nth-child(3)
          a
            transition all .3s ease ,transform .5s ease .3s ,opacity .4s ease .3s
        &:nth-child(4)
          a
            transition all .3s ease ,transform .6s ease .4s ,opacity .5s ease .4s
        &:nth-child(5)
          a
            transition all .3s ease ,transform .6s ease .5s ,opacity .5s ease .5s
        a
          transform translate(0px)
          font-family Monument
          // opacity 1

  .ulx
    display flex
    align-items center
    flex-direction column
    padding 20px 50px
    justify-content flex-start
    z-index 200
    z-index 100
    overflow auto
    width 50%
    box-sizing border-box
    overflow hidden
    li

      font-size 2.5rem
      // opacity 0
      // font-weight bold
      // letter-spacing 2px
      // mix-blend-mode: exclusion;
      position relative
      transition all .3s ease
      overflow hidden
      &.active
        // pointer-events none
        a
          // pointer-events none
          &:after
            content ''
            position absolute
            top 10px
            left 10px
            width 30px
            height 4px
            display block
            background getColor('bg', 1)
      a
        padding 25px 10px
        display block
        position relative
        transition all .3s ease
        outline none
        text-decoration none
        color getColor('bg')
        transform translate(0,150px)
        font-family Monument
        &:after
          content ''
          position absolute
          top 0px
          left 0px
          width 0%
          height 20px
          top 50%
          background getColor('bg')
          // mix-blend-mode: exclusion;
          transition all .25s ease
        &:hover
          letter-spacing 8px
          &:after
            width 20%




@media screen and (max-width: 1000px)
  .con-logo-x
    width 100px
@media screen and (max-width: 1000px)
  .con-logo-x
    display none
  .con-points
    .ulx
        width 75%

@media screen and (max-width: 768px)
  .con-points
    overflow auto
    padding-bottom 35px
    .con-data
      margin 0px
      h3
        padding 7px 0px
    .ulx
      width 60%
      li
        font-size 1.5rem
  .con-correo
    width 40%

@media screen and (max-width: 500px)
  .con-menu-more--close
    top 5px
    right 5px
  .con-points
    display block
    padding-top 80px
    .con-data
      padding 0px
      padding-bottom 10px
      h3
        padding 0px
        padding-top 5px
    .con-correo
      padding-top 0px
    .ulx
      padding 20px
      width 100%
      li
        font-size 1rem
        a
          padding 15px 10px
  .con-correo
    width 100%
    padding 20px
    height auto

@media screen and (max-width: 768px) and (orientation: landscape)
  .con-points
    .ulx
      display block
      width 100%
      max-height 100vh
      li
        a
          padding 10px 20px
          font-size 1.3rem
</style>
