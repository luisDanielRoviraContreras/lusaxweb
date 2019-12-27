<template lang="html">
  <transition name="fade">
    <div
      class="loading-page" v-if="loading">
      <!-- <p>Loading... new</p> -->
      <LoadingAnimate />



      <div class="con-lineas">
        <div ref="line1" class="line1 line" />
        <div ref="line2" class="line2 line" />
        <div ref="line3" class="line3 line" />
        <div ref="line4" class="line4 line" />
      </div>
    </div>
  </transition>
</template>

<script>
import LoadingAnimate from './LoadingAnimate'
export default {
  components:{
    LoadingAnimate
  },
  data: () => ({
    loading: true
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false

    }
  }
}
</script>

<style lang="stylus">
@import('../../style/mixin')
.fade-enter-active, .fade-leave-active
  transition: all .25s ease;

.fade-enter, .fade-leave-to
  opacity: 0;

  .loading-animate
    opacity 0
    // transform scale(2)
    // transform translate(0,300px)  scaleY(2) scaleX(.8)

.loading-page
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background getColor('bg', 1)
  text-align center
  font-size 30px
  font-family sans-serif
  z-index 5100
  // cursor default !important
  display flex
  align-items center
  justify-content center

.con-lineas
  width 30px
  height 30px
  position fixed
  right 30px
  bottom 30px
  .line
    background getColor('color', 1)
    position absolute
    border-radius 3px
    // max-width 101% !important
    // max-height 101% !important
    &.line1
      left -2px
      top -2px
      width 0%
      height 2px
      animation anima 1.6s ease infinite
      // background: linear-gradient(90deg, getColor('color', 0) 0%, getColor('color', 1) 100%)

    &.line2
      right -2px
      top -2px
      width 2px
      height 0%
      animation anima2 1.6s ease .4s infinite
      // background: linear-gradient(0deg, getColor('color', 1) 0%, getColor('color', 0) 100%)
    &.line3
      bottom -2px
      right -2px
      width 0%
      height 2px
      animation anima 1.6s ease .8s infinite
      // background: linear-gradient(90deg, getColor('color', 1) 0%, getColor('color', 0) 100%)
    &.line4
      left -2px
      bottom -2px
      width 2px
      height 0%
      animation anima2 1.6s ease 1.2s infinite
      // background: linear-gradient(0deg, getColor('color', 0) 0%, getColor('color', 1) 100%)

@keyframes anima
  0%
    width 0%
  25%
    width 30px
  100%
    opacity 0
    width 30px

@keyframes anima2
  0%
    height 0%
  25%
    height 30px
  100%
    opacity 0
    height 30px

</style>
