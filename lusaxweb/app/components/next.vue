<template>
  <div class="con-nextx">

    <div
      @click="handleClick"
      @mouseenter="mouseenterNext"
      @mouseleave="mouseleaveNext"
      :class="{
        'prox': prox
      }"
      class="content-next">
      <h4 class="h-fondo">
        {{ title }}
      </h4>
      <h3>{{ title }}</h3>

      <img :src="`../../worksfolder/${img}.jpg`" alt="">

      <p>{{ $t('projects.view') }}</p>
    </div>

  </div>
</template>
<script>
export default {
  props:{
    img: null,
    title: {
      default:'Next Project'
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
  methods:{
    handleClick() {
      if(!this.prox) {
        this.$router.push(this.url)
      }
    },
    mouseenterNext() {
      let mouse = document.querySelector('.mouse')

      if(this.prox) {
        mouse.classList.add('prox')
      } else {
        mouse.classList.add('next')
      }
    },
    mouseleaveNext() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.remove('next')
      mouse.classList.remove('prox')
    },
  }
}
</script>
<style lang="stylus">
@import('../../style/mixin')
.h-fondo
  position absolute
  top 0px
  left 0px
  font-size 14rem
  display block
  height 600px
  // width 100%
  // background rgb(100,0,0)
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: getColor('color', .04);
  color transparent
  transform rotate(90deg) translate(-40%, -400px)
  transform-origin left top
  text-overflow ellipsis
  overflow hidden
  white-space nowrap
  z-index 100
  color rgba(255,255,255,0)
  transition all .25s ease
  pointer-events none



.con-nextx
  width 600px
  height 100vh
  position relative
  // background rgb(200,0,0)
  display flex
  align-items center
  justify-content center

  .content-next
    z-index 200
    position relative
    width 400px
    height auto
    max-width 100vw
    // background rgb(100,200,0)
    color getColor('color', 1);
    border-bottom 2px solid getColor('color', .05);
    transition all .25s ease
    &:hover
      transform translate(-30px)
      border-bottom 1px solid rgba(255,255,255,0)
      .h-fondo
        z-index 400
        color getColor('color', 1);
        mix-blend-mode: hue;

      img

        transform translate(80px)
        border 4px solid getColor('color', 1);
      h3
        opacity .1
        transform translate(-20px)
      p
        opacity 0
        transform translate(-20px)
    h3
      padding 20px 0px
      font-weight normal
      transition all .25s ease
      font-family Monument
      letter-spacing 1px
    img
      z-index 200
      position relative
      max-width 250px
      max-height 60vh
      transition all .25s ease
      border 4px solid rgba(255,255,255,0)
      box-shadow 0px 0px 0px 0px getColor('color', 0);
    p
      width 100%
      text-align right
      letter-spacing 1px
      font-size .8rem
      padding-bottom 15px
      transition all .25s ease
      font-weight bold

@media screen and (max-width: 768px)
  .con-nextx
    width 400px
    overflow hidden
    .content-next
      width 250px
      p
        padding-top 20px
</style>
