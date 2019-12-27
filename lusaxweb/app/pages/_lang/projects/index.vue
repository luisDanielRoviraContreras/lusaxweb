<template>
  <section class="container">

    <div
      @mouseenter="mouseenterMousex"
      @mouseleave="mouseleaveMousex"

      class="con-projects">

      <ul
        v-for="(section,index) in $store.state.sections"
        :key="index"
        v-show="index == active"
        @mousedown="mousedownx"
        @mousemove="mousemovex"

        @mouseleave="mouseleaveUl"




        @mousewheel="scrollH"
        @mouseup="mouseupx"
        class="con-projects-ul"
        :class="{'pulsex': !notPulse}"
        >

            <!-- :class="{'active': index == active, 'prox': item.prox}" -->
          <li
            v-for="(item,index) in getItems"
            :key="index"
            :class="{'active': index == active, 'prox': false}"
            :style="{
              transition: `all ${index*0.1}s ease`
            }"

            class="itemx">

            <span
              class="number">{{ item.number }}</span>

            <div
              @click="clickItem($event, index, item.prox)"
              @mouseenter="mouseenterx($event,item.prox)"
              @mouseleave="mouseleavex"
              class="con-img">
              <div
              class="bt-image"
                :style="{
                backgroundImage: `url('${$dev ? '../' :$https}${item.img}')`
              }"
              >
              </div>
              <!-- backgroundImage: `url('../${item.img}')` -->
                <!-- backgroundImage: `url('${$dev ? '../' :$https}${item.img}')` -->
              <img
                class="img1x"

                :src="`${$dev ? '../' :$https}${item.img}`"
                alt="slide2">

            </div>

            <h3 class="title">
              <div class="con-svgx">
                <svg v-if="item.awards" xmlns="http://www.w3.org/2000/svg" width="61.5" height="123" viewBox="0 0 61.5 123">
                  <path id="Trazado_21" data-name="Trazado 21" d="M0,0H61.5V123L30.75,92.25,0,123Z"/>
                </svg>
                <span>
                  {{ item.awards }}
                </span>
              </div>
                <span class="soon">
                  ({{ $t('projects.soon') }})
                </span>

                {{ item.name }}


            </h3>
          </li>
      </ul>


      <div  :class="{'notScrolling': notScrolling}" class="scrollingx">

        <div class="effect-scroll">

        </div>
      </div>


    </div>

  </section>
</template>

<script>
export default {
  data:() => ({
    leftx: 0,
    notPulse: true,
    translatex: 0,
    scrolling: false,
    drag: false,
    activeView: false,
    active: 0,
    delta: 0,
    mousex: 0,
    change: 0,
    moving: false,
    notScrolling: false
  }),
  head:() => ({
    title: 'Lusaxweb / Projects',
  }),
  mounted() {
    this.$nextTick(() => {
      document.querySelector('.menu').classList.add('transparentx')
    })


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


    let mouse = document.querySelector('.mouse')
    mouse.classList.remove('back')

    this.smooth()

    document.addEventListener('keydown', this.keydownx)
  },
  watch:{
    translatex() {
      if(this.translatex > 100) {
        this.notScrolling = true
      } else {
        this.notScrolling = false

      }
    }
  },
  computed:{
    getItems() {
      return this.$store.state.sections[this.active].items
    },
  },
  methods:{
    keydownx(evt) {
      let keyx = evt.key
      const element = document.querySelector('.con-projects-ul');
      const parent = document.querySelector('.con-projects')

      if(keyx == 'ArrowRight') {
        this.translatex -= -300
        if(this.translatex > element.clientWidth - parent.clientWidth) {
          this.translatex = element.clientWidth - parent.clientWidth
        }
      } else if (keyx == 'ArrowLeft') {
        this.translatex -= 300
        if(this.translatex < 0) {
          this.translatex = 0
        }
      }
    },
    keydownLeft() {
      console.log('paso por aqui')
      this.translatex -= -80
    },
    keydownRight() {
      this.translatex -= -80
    },
    smooth() {
      const element = document.querySelector('.con-projects-ul'),
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
    mouseenterMousex() {
      let mousex = document.querySelector('.mouse')
      mousex.classList.add('scroll--x')
    },
    mouseleaveMousex() {
      let mousex = document.querySelector('.mouse')
      mousex.classList.remove('scroll--x')
    },
    clickItem(e,name = 1, prox) {
      let nameString = null
      if(prox) {
        return
      }
      if (name == 0) {
        nameString = 'game_of_thrones'
      } else if (name == 1) {
        nameString = 'union_merch'
      } else if (name == 2) {
        nameString = 'red_dead_redemption_2'
      }
      if (!this.moving) {
        this.$router.push(this.$i18n.path('projects/'+ nameString))
      }
    },
    mouseleaveUl() {
      this.mousex = 0
      this.notPulse = true
      setTimeout(() => {
        this.moving = false
      }, 50)
    },
    mousemovex(e) {
      if(this.notPulse) {
        return
      }
      // }, 10)
      const element = e.target.closest('.con-projects-ul');
      const parent = element.parentNode
      let move
      if(e.type=='touchmove'){
        move = this.mousex - (e.targetTouches[0].clientX - 200)
      } else {
        move = this.mousex - (e.clientX - 200)
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
          this.mousex = (e.targetTouches[0].clientX - 200)
        } else {
          this.mousex = (e.clientX - 200)
        }
      } else if (move < -50) {
        this.translatex -= 80
        if(this.translatex < 0) {
          this.translatex = 0
        }
        // element.style.transform = `translate(-${this.translatex}px)`
        if(e.type=='touchmove'){
          this.mousex = (e.targetTouches[0].clientX - 200)
        } else {
          this.mousex = (e.clientX - 200)
        }
      }
    },
    mouseupx(e) {
      e.preventDefault()
      const element = e.target.closest('.con-projects-ul');
      const parent = element.parentNode
      // if(e.type=='touchend'){
      //   // this.translatex -= -this.mousex + (e.targetTouches[0].clientX - 200)
      // } else {
      //   // this.translatex -= -this.mousex + (e.clientX - 200)
      // }

      if(this.translatex < 0) {
        this.translatex = 0
      }

      if(this.translatex > element.clientWidth - parent.clientWidth) {
        this.translatex = element.clientWidth - parent.clientWidth
      }



      // element.style.transform = `translate(-${this.translatex}px)`
      this.mousex = 0
      this.notPulse = true
      setTimeout(() => {
        this.moving = false
      }, 1);

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
    scrollH(e) {
      this.scrolling = true
      let _this = this
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      const element = e.target.closest('.con-projects-ul');
      const parent = element.parentNode
      // console.dir(element)
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
    mouseleavex(evt) {
      let mouse = document.querySelector('.mouse')
      mouse.classList.remove('hoverx')
      mouse.classList.remove('prox')
      // mouse.style.transition = `all .3s ease`
      // setTimeout(() => {
      //   mouse.style.transition = `width .2s ease, height .2s ease, box-shadow .2s ease, transform .2s ease, background .2s ease`
      // }, 500)
    },
    mouseenterx(evt, prox) {
      let coords = evt.target.getBoundingClientRect();
      let mouse = document.querySelector('.mouse')

      if(prox) {
        mouse.classList.add('prox')
      } else {
        mouse.classList.add('hoverx')
      }

      let img = evt.target.querySelector('img')
      let bg = evt.target.querySelector('.bt-image')
      let title = evt.target.closest('.itemx').querySelector('.number')
      evt.target.closest('.itemx .con-img').addEventListener('mousemove', function(e) {
        let x = e.x - e.target.closest('.itemx').getBoundingClientRect().left - (e.target.closest('.itemx').clientWidth / 2)
        let y = e.y - e.target.closest('.itemx').getBoundingClientRect().top - (e.target.closest('.itemx').clientHeight / 2)

        img.style.transform = `translate(${x/40}px, ${y/40}px) scale(1.05)`
        bg.style.transform = `translate(${x/25}px, ${y/25}px) scale(1.2)`
        // title.style.transform = `translate(${x/20}px, ${x/20}px)`
      })

    },
    scrollstart() {
      this.drag = true
      this.mouseleavex()
    },
    scrollend() {
      this.mouseleavex()
      setTimeout(() => {
        this.drag = false
      }, 100)
    },


    changeSec(index) {
      this.active = index
    }
  }
}
</script>

<style lang="stylus" scoped>
@import('../../../../style/mixin')


.scrollingx
  position absolute
  right 30px
  transform translate(0,-50%)
  bottom 50%
  font-weight bold
  font-size .7rem
  font-family poppins
  display flex
  align-items center
  justify-content center
  transition all .25s ease-out
  color getColor('color', 1)
  &.notScrolling
    opacity 0
    right -20px
  .effect-scroll
    position relative
    width 20px
    height 2px
    margin-left 5px
    background getColor('color',.3)
    overflow hidden
    &:after
      width 100%
      height 100%
      top 0px
      left 0px
      position absolute
      content ''
      background getColor('color')
      animation scrollx2 1.3s ease-out infinite

@keyframes scrollx2
  0%
    transform translate(-100%)
  100%
    transform translate(100%)

@keyframes loadx
  0%
    transform rotate(0deg)
  100%
    transform rotate(360deg)

.fadeul-enter-active {
  transition: all .3s ease;
}
.fadeul-enter,  /* .fadeul-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.fadeul-leave-active
  transition: all .3s ease;

.fadeul-leave-to
  opacity 0

.project-enter-active, .project-leave-active
  transition: all .3s ease;

.project-enter, .project-leave-to
  opacity: 0;
  transform scale(0.5)

.container
  background getColor('bg')
  width 100vw
  height 100vh
  // padding 80px 0px
  display flex
  align-items flex-start
  justify-content center
  margin 0px
  overflow hidden
  color getColor('color')

.con-menu
  width 200px
  height 100%
  display flex
  align-items center
  // border-top 1px solid getColor('color',.05)
  // border-bottom 1px solid getColor('color',.05)
  // border-right 1px solid getColor('color',.05)
  transition all .5s ease
  &.blurx
    filter blur(10px)
  ul
    width 100%
    li
      padding 10px 30px
      font-size .8rem
      opacity .6
      position relative
      width 100%
      display block
      transition all .2s ease
      &:after
        content: ''
        width 0%
        height 1px
        top 55%
        left 0px
        background getColor('color',.05)
        position absolute
        transition all .3s ease
      &:hover
        opacity 1

      &.active
        opacity 1
        padding-left 45px
        // text-shadow 2px 2px 1px getColor('color',.5)
        &:after
          width 100%

.con-projects
  height 100%
  // max-height 550px
  margin-top auto
  margin-bottom auto
  width 100%
  padding 0px 50px
  border-top 1px solid getColor('color',.05)
  border-bottom 1px solid getColor('color',.05)
  position relative
  overflow hidden
  &:hover
    .con-img
      &:after
        display none
      &:before
        display none
  // transition all .5s ease
  ul
    height 100%
    width auto
    white-space: nowrap;
    display flex
    position absolute
    left 0px
    will-change: transform;
    // &.pulsex
      // opacity .1
    // justify-content flex-start
    // transition all .25s ease
    &.pulse
      pointer-events none
    &.effect-less
      transform translate(80px)
      opacity .6
    &.effect-plus
      transform translate(-80px)
      opacity .6

.itemx
  width 350px
  height 100%
  position relative
  display flex
  align-items center
  justify-content center
  flex-direction column
  transition all .25s ease
  // margin 0px 30px
  // padding 0px 30px
  border-left 1px solid getColor('color',.05)
  &:hover

    .title
      span
        opacity 1 !important
        transform translate(0,-22px) !important
  &.prox
    pointer-events none
    .con-img
      opacity .15
    .number
      color getColor('color',.2)
    .title
      color getColor('color',.2)
      .soon
        display block

  &:first-child
    border-left 0px
  &:last-child
    // border-right 1px solid getColor('color',.05)
  .number
    width 100%
    text-align right
    font-size .8rem
    border-bottom 1px solid getColor('color',.05)
    color getColor('color',1)
    transition all .25s ease
    display block
    position relative
    z-index 4000
    pointer-events none
    padding 20px
    font-family poppins
    // -webkit-text-stroke-width: 4px;
    // -webkit-text-stroke-color: getColor('color', 1);
    // text-shadow 7px 4px 0px rgba(255,255,255,.1)

  .title
    padding 20px
    pointer-events none
    text-align center
    // width 100%
    font-weight normal
    font-size .9rem
    border-top 1px solid getColor('color',.05)
    transition all .25s ease
    // overflow hidden
    font-weight normal
    color getColor('color',1)
    z-index 4000
    left 0px
    // bottom 16%
    text-align left
    width 100%
    display flex
    align-items center
    justify-content flex-start
    position relative
    background getColor('bg',1)
    .soon
      position relative
      font-size .6rem
      font-weight normal
      padding-right 10px
      display none
    .con-svgx
      position absolute
      top -1px
      right 0px
      display flex
      align-items center
      justify-content center
      flex-direction column
      svg
        fill getColor('color',1)
        max-height 25px
        z-index 100
      span
        position relative
        opacity 0
        font-size .6rem
        color getColor('bg',1)
        transition all .25s ease
        z-index 200
        font-weight bold
        transform translate(0)
  .con-img
    display flex
    align-items center
    justify-content center
    overflow hidden
    border 20px solid getColor('bg')
    transition all .25s ease
    overflow hidden
    position relative
    display flex
    max-height 500px
    width 100%
    user-select none
    z-index 3000
    &:after
      content ''
      position absolute
      top calc(50% - 10px)
      left calc(50% - 10px)
      transform translate(-50%,-50%)
      width 30px
      height 30px
      border 2px solid rgba(0,0,0,0)
      border-left 2px solid getColor('color',.1)
      border-radius 50%
      animation loadx .7s linear infinite
      z-index 100
    &:before
      content ''
      position absolute
      top calc(50% - 10px)
      left calc(50% - 10px)
      transform translate(-50%,-50%)
      width 30px
      height 30px
      border 2px solid rgba(0,0,0,0)
      border-left 2px solid getColor('color',1)
      border-radius 50%
      animation loadx .7s ease infinite
      z-index 100
    &:hover
      // border 10px solid getColor('bg')
      margin-left 30px
      margin-right 30px
      ~ .number
        // -webkit-text-stroke-width: 1px;
        // -webkit-text-stroke-color: getColor('color', 1);
        // color rgba(0,0,0,0)
        right -5px
        // text-shadow 0px 0px 10px rgba(255,255,255,.2)
        mix-blend-mode: exclusion;
        z-index 4000
      .img1x
        filter hue-rotate(-150deg) saturate(2) !important
        opacity .5 !important
        transition all 0s !important
      .bt-image
        transition all 0s !important
    &.openItem
      transform scale(1.2)
      .img1x
        filter invert(.8)
        opacity 0
    &:active
      opacity .1

        // letter-spacing 5px
        // text-decoration line-through
    .img1x
      transition filter .25s ease, opacity .7s ease
      pointer-events none
      z-index 200
      transform scale(1.05)
      width 100%
      opacity 1
      user-select none
      position relative
      margin auto
      display block
      min-height 440px
      z-index 200
    .bt-image
      position absolute
      width 100%
      height 100%
      opacity .5
      background-position center
      // background-attachment fixed
      background-size auto 430px
      filter saturate(6) blur(1px)
      // transition all .3s ease
      transform scale(1.2)
      user-select none
      display block
      z-index 200
// Responsive

@media screen and (max-width: 768px)
  .con-menu
    display none

  .con-projects
    width 100%
    overflow auto
    padding 0px
    padding-right 50px !important
    .scrollingx
      display none
    .con-projects-ul
      &::-webkit-scrollbar
        display none
    ul
      position relative
  .itemx
    width 250px
    .con-img
      width 250px
      border 12px solid getColor('bg')
      .img1x
        min-height 340px !important
      &:hover
        .img1x
          filter hue-rotate(0deg) saturate(1) !important
          opacity 1 !important
      .bt-image
        display none
    .title
      font-size .65rem
      padding 10px 20px
    .number
      font-size .65rem

@media screen and (max-width: 900px) and (orientation: landscape)
  .container
    padding 60px 0px
    .con-projects-ul
      padding-bottom 5px
    .number
      display none
    .title
      padding 10px 20px
</style>
