<template>
  <div
    @mousemove.stop.prevent="mousemovex"
    @mouseenter="$toggleClass($event, 'hiddennext')"
    class="con-next notranslate">
    <nuxt-link :to="$i18n.path(url)">
      <h3>{{ $t('about.next') }}</h3>
      <p>
        {{ name }}

        <span class="flaticon-next-1">
        </span>

      </p>
    </nuxt-link>

    <div ref="luis1" :class="`${classHover}--img1 img1`"></div>
    <div ref="luis2" :class="`${classHover}--img2 img2`"></div>
    <div ref="luis3" :class="`${classHover}--img3 img3`"></div>

    <!-- <div v-if="classHover == 'luismanuel'" ref="luis1" class="luismanuel--img1"></div>
    <div v-if="classHover == 'luismanuel'" ref="luis2" class="luismanuel--img2"></div>
    <div v-if="classHover == 'luismanuel'" ref="luis3" class="luismanuel--img3"></div> -->

  </div>
</template>
<script>
export default {
  props:{
    url:{
      default: null,
      type: String
    },
    name:{
      default: null,
      type: String
    },
    classHover: {
      default: 'luisdaniel',
      type: String
    },

  },
  methods:{
    mousemovex(evt) {
      let x = evt.layerX
      let y = evt.layerY


      this.$refs.luis1.style.left = `${x}px`
      this.$refs.luis1.style.top = `${y}px`

      this.$refs.luis2.style.left = `${x}px`
      this.$refs.luis2.style.bottom = `-${y}px`

      this.$refs.luis3.style.left = `${x}px`
      this.$refs.luis3.style.top = `${y}px`
    }
  }
}
</script>
<style lang="stylus" scoped>
@import('../../../style/mixin')

.luisdaniel--img1
  position absolute
  width 300px
  height 200px
  background url('/about/luis/1.jpg')
  background-size 300px
  visibility hidden
  width 0px
  transition all .2s ease-out
  pointer-events none
  user-select none
  transform translate(-150px, -50%)
  mix-blend-mode: exclusion;
.luisdaniel--img2
  content ''
  position absolute
  width 150px
  height 0px
  background url('/about/luis/luis3.jpg')
  background-size 310px 590px
  background-position center
  transition all .4s ease-out, height .15s ease-in
  pointer-events none
  user-select none
  display block
  // filter hue-rotate(120deg);
  transform translate(100px, 70px)
  mix-blend-mode: saturation;
.luisdaniel--img3
  content ''
  position absolute
  width 150px
  height 0%
  background url('/about/luis/6.jpg')
  background-size 300px 300px
  background-position center
  transition all .3s ease-out, height .25s ease-out
  pointer-events none
  user-select none
  display block
  mix-blend-mode: color;
  transform translate(-250px)


.luismanuel--img1
  position absolute
  width 300px
  height 200px
  background url('/about/lm/6.jpg')
  background-size 300px
  visibility hidden
  width 0px
  transition all .2s ease-out
  pointer-events none
  user-select none
  transform translate(-150px, -50%)
  mix-blend-mode: exclusion;
.luismanuel--img2
  content ''
  position absolute
  width 150px
  height 0px
  background url('/about/papa2.jpg')
  background-size 310px 590px
  background-position center
  transition all .4s ease-out, height .15s ease-in
  pointer-events none
  user-select none
  display block
  // filter hue-rotate(120deg);
  transform translate(100px, 70px)
  mix-blend-mode: saturation;
  filter grayscale(10)
.luismanuel--img3
  content ''
  position absolute
  width 150px
  height 0%
  background url('/about/papa1.jpg')
  background-size 310px 590px
  background-position top
  transition all .3s ease-out, height .25s ease-out
  pointer-events none
  user-select none
  display block
  mix-blend-mode: color;
  transform translate(-250px)


.manuel--img1
  position absolute
  width 300px
  height 200px
  background url('/about/manuel/2.jpg')
  background-size 300px
  visibility hidden
  width 0px
  transition all .2s ease-out
  pointer-events none
  user-select none
  transform translate(-150px, -50%)
  mix-blend-mode: exclusion;
.manuel--img2
  content ''
  position absolute
  width 150px
  height 0px
  background url('/about/manuel2.jpg')
  background-size 310px 590px
  background-position center
  transition all .4s ease-out, height .15s ease-in
  pointer-events none
  user-select none
  display block
  // filter hue-rotate(120deg);
  transform translate(100px, 70px)
  mix-blend-mode: saturation;
  filter grayscale(10)
.manuel--img3
  content ''
  position absolute
  width 150px
  height 0%
  background url('/about/manuel/8.jpg')
  background-size 480px 517px
  background-position center
  transition all .3s ease-out, height .25s ease-out
  pointer-events none
  user-select none
  display block
  mix-blend-mode: color;
  transform translate(-250px)


.lusaxweb--img1
  position absolute
  width 300px
  height 200px
  background url('/about/lusaxweb-1.jpg')
  background-size 400px
  background-position center
  visibility hidden
  width 0px
  transition all .2s ease-out
  pointer-events none
  user-select none
  transform translate(-150px, -50%)
  mix-blend-mode: exclusion;
  display block
.lusaxweb--img2
  content ''
  position absolute
  width 150px
  height 0px
  background url('/about/4.jpg')
  background-size 359px 503px
  background-position center
  transition all .4s ease-out, height .15s ease-in
  pointer-events none
  user-select none
  display block
  // filter hue-rotate(120deg);
  transform translate(100px, 70px)
  mix-blend-mode: saturation;
.lusaxweb--img3
  content ''
  position absolute
  width 150px
  height 0%
  background url('/about/2.jpg')
  background-size 310px 590px
  background-position top
  transition all .3s ease-out, height .25s ease-out
  pointer-events none
  user-select none
  display block
  mix-blend-mode: color;
  transform translate(-250px)


.con-next
  width calc(100% - 50px)
  margin auto
  max-width 600px
  margin-top 300px
  margin-bottom 200px
  position relative
  display block
  a
    display flex
    align-items center
    justify-content space-between
    text-decoration none
    color getColor('color', 1)
    border-bottom 2px solid getColor('color', .05)
    padding 20px 0px
    position relative
    transition all .25s ease
    &:hover
      padding-top 10px
      padding-bottom 30px
      &:after
          width 100%
      ~ .img1
        visibility visible
        width 300px
        height 200px
      ~ .img2
        height 300px !important
      ~ .img3
        height 150px !important

    &:after
      content: ''
      position absolute
      bottom 0px
      left 0px
      width 0%
      height 2px
      background getColor('color', 1)
      transition all .25s ease
      pointer-events none
    h3
      font-family Monument
      font-weight normal
      font-size 1.7rem
      pointer-events none
    p
      font-family poppins
      font-size 1.2rem
      display flex
      align-items center
      justify-content center
      pointer-events none
      span
        pointer-events none
        font-size .8rem
        padding-left 10px

// responsive

@media screen and (max-width: 768px)
  .con-next
    margin-top 100px
    margin-bottom 150px

</style>
