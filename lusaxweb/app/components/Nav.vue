<template>
    <nav class="menu">
        <div class="bg" />
        <div
          @mouseenter="mouseenterLogo"
          @mouseleave="mouseleaveLogo"
          class="con-logo">
          <nuxt-link
            v-if="!$store.state.back"
            to="/">
            <img v-if="getColor" src="/lusaxweb-1.png" alt="">
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
        <ul class="ul">
          <li
            @mouseenter="mouseenterLi"
            @mouseleave="mouseleaveLi"
            >
            <nuxt-link :to="$i18n.path('')">{{ $t('nav.home') }}</nuxt-link>
          </li>
          <li
            @mouseenter="mouseenterLi"
            @mouseleave="mouseleaveLi"
            class="projects"
            >
            <nuxt-link :to="$i18n.path('projects')">{{ $t('nav.projects') }}</nuxt-link>
          </li>
          <li
            @mouseenter="mouseenterLi"
            @mouseleave="mouseleaveLi"
            >
            <nuxt-link :to="$i18n.path('about')">{{ $t('nav.about') }}</nuxt-link>
          </li>
          <li
            @mouseenter="mouseenterLi"
            @mouseleave="mouseleaveLi"
            >
            <nuxt-link :to="$i18n.path('contact')">{{ $t('nav.contact') }}</nuxt-link>
          </li>
        </ul>
        <div
          @click="$store.state.activePoints = !$store.state.activePoints"
          @mouseenter="mouseenterx"
          @mouseleave="mouseleavex"
          class="con-menu-more">

          <div class="point1 pointx" />
          <div class="point2 pointx" />
          <div class="point3 pointx" />
        </div>
    </nav>
</template>
<script>
export default {
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
    mouseenterLi() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.add('hover--li')
    },
    mouseleaveLi() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.remove('hover--li')
    },
    mouseenterx(evt) {
      let mouse = document.querySelector('.mouse')
      mouse.classList.add('points')
      this.$parent.pointsActive = true
    },
    mouseleavex() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.remove('points')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import('../../style/mixin.styl')
.con-menu-more
  display flex
  align-items center
  justify-content center
  // border 1px solid getColor('color')
  width 35px
  height 35px
  position absolute
  right 20px
  transition all .25s ease
  &:hover
    transform scale(1.2)
    .point1
      opacity 0
    .point3
      opacity 0
    .point2
      opacity 0
.pointx
  width 3px
  height 3px
  background getColor('color')
  position absolute
  pointer-events none
  transition all .25s ease
  border-radius 50%
  &.point1
    transform translate(-7px)
  &.point3
    transform translate(7px)


.menu
  width 100%
  display flex
  align-items center
  justify-content center
  padding 10px 30px
  color getColor('color')
  background transparent
  position fixed
  left 0px
  top 0px
  z-index 4000
  // background getColor('bg',.96)
  transition padding .3s ease, boxShadow .3s ease
  box-shadow 0px 0px 37px 0px rgba(0,0,0,0)
  .bg
    width 100%
    height 100%
    position absolute
    top 0px
    left 0px
    pointer-events none
  &.transparentx
    background transparent !important
  &.fixedx
    // background getColor('bg',.96) !important
    padding 0px 30px !important
    box-shadow 0px 0px 20px 0px rgba(0,0,0,.05)
    .bg
      background getColor('bg', .7)
      backdrop-filter saturate(180%) blur(20px)
  .con-logo
    position absolute
    left 20px
    top 50%
    transform translate(0,-50%)
    a
      text-decoration none
      font-size 1.1rem
      color getColor('color')
      img
        transition all .3s ease
        width 150px


  .ul
    display flex
    align-items center
    justify-content center

    li
      &.projects
        .nuxt-link-active
          opacity 1
          &:after
            position absolute
            width 50%
            opacity 1
      a
        padding 15px 25px
        display block
        font-size .75rem
        text-decoration none
        color getColor('color')
        opacity .5
        position relative
        transition all .2s ease
        text-transform capitalize
        font-family poppins
        &:hover
          // font-weight bold
          opacity 1
        &.nuxt-link-exact-active
          opacity 1

.back
  display flex
  align-items center
  justify-content center
  width 100px
  transition all .25s ease
  &:hover
    span
      letter-spacing 2px
    i
      padding-right 15px
      padding-left 5px
  i
    padding-left 15px
    padding-right 5px
    transition all .25s ease
    text-decoration none !important

// Responsive

@media screen and (max-width: 768px)
  .menu
    .ul
      li
        a
          padding 10px 15px
@media screen and (max-width: 690px)
  .con-logo
    max-width 28px
    overflow hidden
@media screen and (max-width: 600px)
  .menu
    padding 15px
    .con-menu-more
      transform rotate(90deg)
    .ul
      li
        a
          padding 10px
@media screen and (max-width: 460px)
  .menu
    .con-logo
      display none
  .menu
    justify-content flex-start
@media screen and (max-width: 350px)
  .menu
    padding 5px
    .con-menu-more
      right 10px
    .ul
      li
        a
          padding 10px 7px
          font-size .7rem
@media screen and (max-width: 768px) and (orientation: landscape)
  .menu
    padding 5px 15px
    .con-logo
      a
        img
          width 90px
    .ul
      li
        a
          padding 10px 10px
          font-size .7rem
</style>
