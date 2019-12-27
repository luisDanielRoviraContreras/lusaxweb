<template>
  <section
    :class="{'invert': !getColor}"
    ref="container" class="container">
    <div :class="{'active': effect1}" class="effect-home1" />
    <div :class="{'active': effect2}" class="effect-home2" />
    <div :class="{'active': effect3}" class="effect-home3" />
    <div :class="{'active': effect4}" class="effect-home4" />

    <div class="con-content">

    <div class="con-slides">

    <div
      ref="slide1"
      class="con-slide-1">

      <div
        ref="punto1"
        class="punto1 punto" />
      <div
        ref="punto1"
        class="punto2 punto" />
      <div
        ref="punto1"
        class="punto3 punto" />
      <div
        ref="punto1"
        class="punto4 punto" />


      <div
        ref="line1"
        class="linea1" />
      <div
        ref="line3"
        class="linea3" />
      <div
        ref="line4"
        class="linea4" />


      <header class="headerx">
        <h2>
          {{ $t('home.outstanding') }}
        </h2>
      </header>


      <div
        @mouseenter="mouseenterSlide"
        @mouseleave="mouseleaveSlide"
        ref="conslide1" class="con-slide">

          <img
            v-for="(img, index) in $t('home.slide1')"
            :key="img.name"
            ref="imgslider"
            :class="{'active': img.name == indexSlide1.name}"
            :src="`../destacados/${index}_opt_mobile.jpg`"
            :srcset="`../destacados/${index}_opt.jpg 600w`"
            alt="slide1">
      </div>


      <div
        class="title-slide">
        <span
          v-for="(img) in $t('home.slide1')"
          :key="img.name"
          :class="{'active': img.name == indexSlide1.name}"
          >
          {{ img.name }}
        </span>

        <div
          :style="{
            width: `${getTime1}%`
            }"
          class="percent" />
      </div>

        <!-- :class="{
          'active': change1
        }" -->

      <!-- <img
        ref="imgsliderblur"
        class="img-blur"
        :src="`../destacados/${indexSlide1.key}_opt.jpg`" alt="slide1"> -->

      <footer>
        <div
          ref="line3"
          class="linea3" />
        <div class="con-footer">


          <p>
            {{ indexSlide1.text }}
          </p>

          <ul>
            <li
              :class="{'active': indexSlide1.name == $t('home.slide1')[0].name}"
              @click="indexSlide1 = $t('home.slide1')[0]" />
            <li
              :class="{'active': indexSlide1.name == $t('home.slide1')[1].name}"
              @click="indexSlide1 = $t('home.slide1')[1]" />
            <li
              :class="{'active': indexSlide1.name == $t('home.slide1')[2].name}"
              @click="indexSlide1 = $t('home.slide1')[2]" />
          </ul>
        </div>
      </footer>
    </div>
    <div
      ref="slide2"
      class="con-slide-2">

      <div
        ref="punto1"
        class="punto2 punto" />
      <div
        ref="punto1"
        class="punto3 punto" />

      <div
        ref="line1"
        class="linea1" />
      <div
        ref="line2"
        class="linea2" />
      <div
        ref="line5"
        class="linea5" />


      <header class="headerx">
        <h2>
          {{ $t('home.news') }}
        </h2>
      </header>

      <div

        @mouseenter="mouseenterSlide"
        @mouseleave="mouseleaveSlide"
        ref="conslide2" class="con-slide">

        <img
          v-for="(img, index) in $t('home.slide2')"
          :key="img.name"
          :class="{'active': img.name == indexSlide2.name}"
          ref="imgslider"
          :srcset="`../noticias/${index}_opt.jpg 768w`"
          alt="slide2">
          <!-- :src="`../noticias/${index}_opt.jpg`" -->


      </div>

      <div
        class="title-slide">
        <span
          v-for="(img) in $t('home.slide2')"
          :key="img.name"
          :class="{'active': img.name == indexSlide2.name}"
          >
          {{ img.name }}
        </span>

        <div
          :style="{
            width: `${getTime2}%`
            }"
          class="percent" />
      </div>

        <!-- :class="{
          'active': change2
        }" -->
        <!-- v-if="!change2" -->
      <!-- <img
        ref="imgsliderblur2"
        class="img-blur"
        :srcset="`../noticias/${indexSlide2.key}_opt.jpg 768w`"
        alt="slide2"> -->

      <footer>
        <div class="con-footer">

          <p>
            {{ indexSlide2.text }}
          </p>

          <ul>
            <li
              :class="{'active': indexSlide2.name == $t('home.slide2')[0].name}"
              @click="indexSlide2 = $t('home.slide2')[0]" />
            <li
              :class="{'active': indexSlide2.name == $t('home.slide2')[1].name}"
              @click="indexSlide2 = $t('home.slide2')[1]" />
            <li
              :class="{'active': indexSlide2.name == $t('home.slide2')[2].name}"
              @click="indexSlide2 = $t('home.slide2')[2]" />
            <li
              :class="{'active': indexSlide2.name == $t('home.slide2')[3].name}"
              @click="indexSlide2 = $t('home.slide2')[3]" />
          </ul>

        </div>
      </footer>
      </div>
    </div>

        <!-- v-if="loadimg1"  -->
    <div class="con-more">
      <div
        class="box1">
        <div class="con-box">
          <img :class="{'active': true}" src="/home/1_opt_mobile.jpg" srcset="/home/1_opt_tablet.jpg 768w, /home/1_opt.jpg 1200w"  alt="home">
        </div>
      </div>
      <!-- v-if="loadImages" -->
      <div  class="box2">
        <div class="sub-box1">
          <h2 v-html="$t('home.title1')" class="h2x1" />

          <div :class="{'active': true}" class="item1">
            <div class="con-imgx">
            <img src="/home/3_opt.jpg" alt="home">
            </div>

            <h3>{{ $t('home.item2.title') }}</h3>
            <p>
              {{ $t('home.item2.text') }}
            </p>
          </div>
        </div>
        <div class="sub-box2">
          <div :class="{'active': true}" class="item1">
            <img src="/home/2_opt.jpg" alt="home">

            <h3>{{ $t('home.item1.title') }}</h3>
            <p>
              {{ $t('home.item1.text') }}
            </p>
          </div>



          <div :class="{'active': true}" class="item2">
            <h2 v-html="$t('home.title2')" />
            <img src="/home/4_opt.jpg" alt="home">

            <h3>{{ $t('home.item3.title') }}</h3>
            <p>
              {{ $t('home.item3.text') }}
            </p>
          </div>
        </div>
      </div>

    </div>

        <!-- v-if="loadImages"  -->
      <footer
        class="footerx">
        <div class="footer-left">
          <ul
            :key="indexul"
            v-for="(ul,indexul) in footer">
            <li class="titlex">
              {{ ul.title }}
            </li>
            <li
              @mouseenter="mouseenterx"
              @mouseleave="mouseleavex"
              :key="index"
              v-for="(li,index) in ul.items">
              <a :href="li.url">
                {{ li.title }}
              </a>
            </li>
          </ul>

          <p class="copyx">
            ©2019 · Lusaxweb All Right Reserved.
          </p>
        </div>

        <div
          @click="$router.push(`${$i18n.path('projects')}`)"
          @mouseenter="mouseenterxImg"
          @mouseleave="mouseleavexImg"
          class="footer-right">
          <button

            class="view-project">
            <!-- View Projects -->
            {{ $t('home.view') }}
          </button>

          <img class="img-effect" :src="`/worksfolder/${image}.jpg`" alt="">
        </div>
      </footer>
    </div>


  </section>
</template>

<script>
import { timeout } from 'q';
export default {
  data() {
    return {
    intervalfooter: null,
    max: 11,
    image: 0,
    loadimg1: false,
    loadImages: false,
    descktop: false,
    effect1: false,
    effect2: false,
    effect3: false,
    effect4: false,
    animate1: null,
    time1: 0,
    animate2: null,
    time2: 0,
    activeSlide1: 0,
    interval1: null,
    activeSlide2: 0,
    interval2: null,
    change1: false,
    change2: false,
    t: this.$t('home'),
    indexSlide1: this.$t('home.slide1')[0],
    indexSlide2: this.$t('home.slide2')[0],
    footer:[
      {
        title: this.$t('home.footer.social'),
        items:[
          {
            url: 'https://github.com/lusaxweb',
            title: 'Github'
          },
          {
            url: 'https://www.behance.net/ManuelRovira',
            title: 'Behance'
          },
          {
            url: 'https://dribbble.com/manuelrovira',
            title: 'Dribbble'
          },
          {
            url: 'https://instagram.com/lusaxweb',
            title: 'Instagram'
          },
        ]
      },
      {
        title: this.$t('home.footer.startup'),
        items:[
          {
            url: 'https://lusaxweb.github.io/vuesax/',
            title: 'Vuesax'
          },

          // {
          //   url: '',
          //   title: 'Mockui'
          // },
          // {
          //   url: '',
          //   title: 'Sticky Design'
          // },
          {
            url: 'https://devAwesome.lusaxweb.net',
            title: 'DevAwesome'
          },
          {
            url: 'https://lusaxweb.github.io/vuttons/',
            title: 'Vuttons'
          },
          {
            url: 'https://lusaxweb.github.io/kursor/',
            title: 'Kursorjs'
          },
        ]
      },
      {
        title: this.$t('home.footer.contact'),
        items:[
          {
            url: null,
            title: '+58 4242844333'
          },
          {
            url: '',
            title: 'Contact@lusaxweb.net'
          }
        ]
      },
    ]
    }
  },
  computed: {
    getColor() {
      return (this.$store.state.color == '15, 15, 19')
    },
    getTime1() {
      return Math.floor((this.time1 * 100) / 270)
    },
    getTime2() {
      return Math.floor((this.time2 * 100) / 260)
    }
  },
  watch: {
    indexSlide1() {
      clearInterval(this.interval1)
      this.time1 = 0
      cancelAnimationFrame(this.animate1)
      this.intervalSlide()
    },
    indexSlide2() {
      clearInterval(this.interval2)
      this.time2 = 0
      cancelAnimationFrame(this.animate2)
      this.intervalSlide2()
    }
  },

  mounted() {
    document.querySelector('.scrolling').classList.add('active')
    document.querySelector('.menu').classList.add('transparentx')
    this.descktop = window.innerWidth > 768


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


    // window.addEventListener('mousemove', this.mouseMovex)

    window.addEventListener('resize', this.Resize)

    this.intervalSlide()

    setTimeout(() => {
      this.intervalSlide2()
    }, 2500)

    this.$nextTick(() => {
      this.smooth()
    })
    document.querySelector('html').style.overflow = 'auto'
    let menu = document.querySelector('.menu')
    window.addEventListener('scroll', () => {

      if(window.pageYOffset > 20) {
        document.querySelector('.scrolling').classList.add('hidden')
        menu.classList.add('fixedx')
      } else {
        document.querySelector('.scrolling').classList.remove('hidden')
        menu.classList.remove('fixedx')
      }
      if(window.pageYOffset > 100) {
        menu.classList.add('fixedx')
      } else {
        menu.classList.remove('fixedx')
      }
      if(window.pageYOffset > 200) {
        this.effect1 = true
        // document.body.style.height = Math.floor(document.querySelector('.con-content').clientHeight) + "px"
      } else {

        this.effect1 = false
      }

      if(window.pageYOffset > 1000) {
        this.effect2 = true
      } else {
        this.effect2 = false
      }

      if(window.pageYOffset > 1600) {
        this.effect3 = true
      } else {
        this.effect3 = false
      }

      if(window.pageYOffset > 2300) {
        this.effect4 = true

      } else {
        this.effect4 = false

      }

      if(window.pageYOffset > document.querySelector('.footerx').offsetTop - window.innerHeight ) {
        document.querySelector('.nav-down').classList.add('exclusion')
      } else {
        document.querySelector('.nav-down').classList.remove('exclusion')
      }


    })
  },
  beforeDestroy() {
    document.querySelector('.menu').classList.remove('transparentx')
    window.removeEventListener('mousemove', this.mouseMovex)
    document.body.style.height = 'auto'
    document.querySelector('html').style.overflow = 'hidden'
    cancelAnimationFrame(this.animate)
  },
  methods:{
    Resize() {
      var jsScroll = document.querySelector('.con-content')
      if(this.descktop) {
        document.body.style.height = Math.floor(jsScroll.clientHeight) + "px"
      }
    },
    mouseenterxImg() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.add('hover-footer-img')

      this.intervalfooter = setInterval(() => {
        if (this.image == this.max) this.image = 0
        let ramdom = Math.round(Math.random() * (this.max - 1) + 1)
        this.image = ramdom == this.image ? this.max == ramdom ? ramdom + 1 : ramdom - 1 : ramdom
      }, 150);
    },
    mouseleavexImg() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.remove('hover-footer-img')

      clearInterval(this.intervalfooter)
    },
    mouseenterx() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.add('hover--li')
    },
    mouseleavex() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.remove('hover--li')
    },
    smooth() {
      const body = document.body,
      jsScroll = document.querySelector('.con-content'),
      height = jsScroll.clientHeight - 1,
      speed = 0.05

      var raf

      var offset = 0
      let _this = this
      if(this.descktop) {
        body.style.height = Math.floor(jsScroll.clientHeight) + "px"
      }

       function smoothScroll() {

        let topx = window.pageYOffset
        offset += (topx - offset) * speed

        var scroll = "translateY(-" + offset + "px) translateZ(0)"
        jsScroll.style.transform = scroll

        document.querySelector('.effect-home1').style.transform = "translateY(-" + offset/1.4 + "px) translateZ(0)"
        document.querySelector('.effect-home2').style.transform = "translateY(-" + offset/1.8 + "px) translateZ(0)"
        document.querySelector('.effect-home3').style.transform = "translateY(-" + offset/2 + "px) translateZ(0)"
        document.querySelector('.effect-home4').style.transform = "translateY(-" + offset/2 + "px) translateZ(0)"


        _this.animate = requestAnimationFrame(smoothScroll)
      }
      smoothScroll()
    },
    intervalSlide() {

      this.time1 = 0

      let time = () => {
        this.time1 += 1
        this.animate1 = requestAnimationFrame(time)
      }

      time()

      this.interval1 = setInterval(() => {
        this.activeSlide1 ++
        this.indexSlide1 = this.t.slide1[this.activeSlide1]
        if(this.activeSlide1 == 2) this.activeSlide1 = -1
      }, 5000)
    },
    intervalSlide2() {

      this.time2 = 0

      let time = () => {
        this.time2 += 1
        this.animate2 = requestAnimationFrame(time)
      }

      time()

      this.interval2 = setInterval(() => {
        this.activeSlide2 ++
        this.indexSlide2 = this.t.slide2[this.activeSlide2]
        if(this.activeSlide2 == 3) this.activeSlide2 = -1
      }, 5000)
    },
    mouseenterSlide() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.add('plus')
    },
    mouseleaveSlide() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.remove('plus')
    },
    setCssVariable(propertyName, value) {
      document.documentElement.style.setProperty(propertyName, value);
    },
    mouseMovex(evt) {
      let cords = evt
      let x = cords.x
      let y = cords.y
      // console.dir(cords)
      // console.log('hola mundo')
      let slide1 = this.$refs.conslide1
      let imgSlide1 = this.$refs.conslide1.querySelector('.active')
      let imgsliderblur1 = this.$refs.imgsliderblur

      // slide1.style.transform = `translate(-${x/110}px, ${y/110}px)`
      // imgsliderblur1.style.transform = `scale(.85) translate(${x/120}px, ${y/120}px)`
      // imgSlide1.style.transform = `scale(1.1) translate(-${x/200}px, ${y/200}px)`
      // imgSlide1.forEach(element => {
      //   element.style.transform = `scale(1.2) translate(-${x/50}px, ${y/50}px)`
      // });

      let conslide2 = this.$refs.conslide2
      let imgslider2 = this.$refs.conslide2.querySelector('.active')
      let imgsliderblur2 = this.$refs.imgsliderblur2

      // conslide2.style.transform = `translate(-${x/110}px, ${y/110}px)`
      // imgsliderblur2.style.transform = `scale(.85) translate(${x/120}px, ${y/120}px)`
      // imgslider2.style.transform = `scale(1.1) translate(-${x/200}px, ${y/200}px)`
    }
  }
}
</script>

<style lang="stylus">
@import('../../../style/mixin')

.invert
  .img-blur
    display none !important

.effect-home1
  width 20vw
  left 18%
  top 1000px
  background rgba(255,255,255,0)
  position absolute
  display block
  z-index 3000
  // mix-blend-mode: exclusion
  height 170px
  // border 1px solid rgba(255,255,255,.05)
  opacity 0
  border 5px solid getColor('color')
  pointer-events none
  transition opacity .2s ease
  &.active
    opacity 1
    border 20px solid getColor('color')

.effect-home2
  width 400px
  left 65%
  top 1000px
  background getColor('color')
  position fixed
  display block
  z-index 3000
  // mix-blend-mode: exclusion
  height 0px
  border 1px solid rgba(255,255,255,.05)
  opacity 0
  pointer-events none
  transition opacity .2s ease
  &:after
    content ''
    width 200px
    height 100%
    position absolute
    top -40px
    left -40px
    background transparent
    transition all .5s ease
    border 5px solid getColor('color')
  &.active
    opacity 1
    height 100px

.effect-home3
  width 80px
  left 16%
  top 1200px
  position fixed
  display block
  z-index 3000
  // mix-blend-mode: exclusion
  height 400px
  border 1px solid rgba(255,255,255,.0)
  opacity 0
  pointer-events none
  transition opacity .2s ease
  &:after
    content ''
    width 70px
    height 70px
    position absolute
    bottom 20px
    left 50px
    border 5px solid getColor('color')
    border-radius 50%
    background getColor('color')
    transition all .5s ease
  &.active
    height 400px
    // background getColor('bg')
    opacity 1
    border 10px solid getColor('color')
    &:after
      left 300px

.effect-home4
  width 500px
  left 55%
  top 1800px
  background getColor('color')
  position fixed
  display block
  z-index 3000
  // mix-blend-mode: exclusion
  height 90px
  opacity 0
  pointer-events none
  transition opacity .2s ease
  // border 1px solid getColor('bg')
  &.active
    opacity 1

.footer-right
  width 450px
  height 100%
  background getColor('color')
  position absolute
  bottom 0px
  right 0px
  display flex
  align-items center
  justify-content center
  &:hover
    .img-effect
      opacity .2
    button
      padding-bottom 15px !important
  button
    padding 20px 5px
    border 0px
    border-bottom 1px solid getColor('bg')
    background transparent
    color getColor('bg')
    font-family poppins
    transition all .25s ease
  .img-effect
    position absolute
    width 100%
    top 0px
    left 0px
    opacity 0
    pointer-events none
    transition all .25s ease

.footer-left
  display flex
  align-items flex-start
  justify-content flex-start
  margin-bottom 100px
  width 100%
  padding-right 450px
  .copyx
    position absolute
    bottom 0px
    right 450px
    padding 20px
    font-size .7rem
    color getColor('color', .4)
  ul
    padding 40px
    li
      &.titlex
        padding 6px
        display block
        font-size .9rem
        font-weight bold
        padding-bottom 13px
        color getColor('color', .8)
        font-family poppins
      a
        padding 6px
        display block
        opacity .7
        color getColor('color', .6)
        text-decoration none
        font-size .75rem
        transition all .2s ease
        font-family poppins
        &:hover
          color getColor('color', 1)
.footerx
  width 100%
  display flex
  align-items center
  justify-content space-between
  position relative

html
  &::-webkit-scrollbar
    width: 0px
    height 0px

.container
  position fixed
  color getColor('color', 1)
.con-more
  width 100%
  position relative
  z-index 10
  min-height 400px
  .box1
    width 100%
    border-top 1px solid getColor('color', .05)
    border-bottom 1px solid getColor('color', .05)
    display flex
    align-items center
    justify-content center
    padding 0px 30px
    .con-box
      // width calc(100% - 200px)
      padding 20px
      border-left 1px solid getColor('color', .05)
      border-right 1px solid getColor('color', .05)
      max-width 1152px
      img
        width 100%
        display block
        opacity 0
        transform translate(0,100px)
        transition opacity .25s ease, transform .25s ease
        &.active
          opacity 1
          transform translate(0px)
  .box2
    width 100%
    border-bottom 1px solid getColor('color', .05)
    display flex
    align-items center
    justify-content center
    // padding 0px 100px
    padding 0px 30px
    box-sizing border-box

    h3
      padding 20px 0px
    p
      font-size .85rem
    .sub-box1
      width 50%
      height 2600px
      max-width 576px
      // background rgb(0,200,0)
      display flex
      align-items center
      justify-content center
      flex-direction column
      position relative
      border-left 1px solid getColor('color', .05)
      .item1
        border-top 1px solid getColor('color', .05)
        padding 25px
        opacity 0
        transform translate(0,100px)
        transition all .25s ease
        &.active
          opacity 1
          transform translate(0)
        img
          width 100%
          display block
      .h2x1
        position absolute
        top 180px
        font-size 2.6rem
        font-family: Monument;
        left -100px
        text-align left
        transform rotate(90deg)
    .sub-box2
      width 50%
      height 2600px
      max-width 576px
      display flex
      align-items center
      justify-content space-between
      flex-direction column
      padding 250px 0px
      border-left 1px solid getColor('color', .05)
      border-right 1px solid getColor('color', .05)
      .item1
        border-top 1px solid getColor('color', .05)
        padding 25px
        opacity 0
        transition all .25s ease
        transform translate(0,100px)
        &.active
          opacity 1
          transform translate(0)
        img
          width 100%
      .item2
        padding 0px
        opacity 0
        transform translate(0,100px)
        transition all .25s ease
        &.active
          opacity 1
          transform translate(0)
        h2
          border-bottom 1px solid getColor('color', .05)
          padding 25px
          font-size 2.5rem
          font-family: Monument;
          font-weight normal
        img
          width calc(100% - 50px)
          margin 25px
        p
          padding 0px 25px
        h3
          padding 25px
          padding-top 0px

@keyframes hoverx
  0%
    filter hue-rotate(140deg)
  20%
    filter hue-rotate(-240deg)
  40%
    filter hue-rotate(20deg)
  60%
    filter hue-rotate(300deg)
  80%
    filter hue-rotate(-80deg)
  100%
    filter hue-rotate(140deg)

@keyframes llegada
  0%
    left 30px
  100%
    left 0px


.percent
  position absolute
  bottom -1px
  left -10px
  height 3px
  background getColor('bg', 1)
  // background rgb(255,255,255)
  // mix-blend-mode: exclusion;
.container
  background getColor('bg')
  width 100vw
  margin 0px
  .con-slides
    background getColor('bg')
    width 100vw
    height 100vh
    padding 100px 30px
    display flex
    align-items center
    justify-content center
    margin 0px
    overflow hidden
    position relative
    max-height 1000px
  .con-slide-1, .con-slide-2
    width 700px
    height 420px
    // background getColor('color')
    position relative
    box-sizing border-box
    &.con-slide-2
      width 450px
      height 420px
      position relative
    footer
      width 100%
      height 80px
      position absolute
      bottom 0px

    .con-slide
      width calc(100% - 40px)
      height calc(100% - 120px)
      position absolute
      left 20px
      top 20px
      overflow hidden
      z-index 200
      // transition all .2s ease
      border 0px solid getColor('color')
      display flex
      align-items center
      justify-content center
      .con-imgx
        position absolute
        width 100%
        height 100%
      &:hover
        .bgchange
          transform translate(calc(-100% + 15px)) !important
        img
          transform scale(1.05) !important
          // transform scale(1.2) !important

        + .title-slide
          padding-left 40px
        ~ .img-blur
          filter blur(30px)
        // + .img-blur

      img
        width 100%
        position absolute
        height auto
        transform scale(1.1)
        opacity 0
        visibility hidden
        transition all .25s ease
        // transition all .3s ease
        display block
        // border:none !important
        outline: none;
        margin 0px
        &.active
          opacity 1
          visibility visible
          transform scale(1)
          // animation llegada .5s .3s
      .bgchange
        width 100%
        height 100%
        position absolute
        left 0px
        top 0px
        display block
        background getColor('color', 1)
        transform translate(-100%) !important
        transition all .2s ease
        &.active
          transform translate(0%) !important

.con-footer
  display flex
  align-items center
  justify-content space-between
  position absolute
  left 0px
  height 100%
  width 100%
  padding 10px 20px
  p
    font-size .8rem
  ul
    display flex
    align-items center
    justify-content center
    li
      width 10px
      height 25px
      padding 8px
      opacity .15
      transition all .2s ease
      position relative
      a
        font-family poppins
      &:hover
        opacity .5
      &.active
        opacity 1
      &:after
        content: ''
        position absolute
        top 50%
        transform translate(-50%, -50%)
        left 50%
        width 2px
        height 90%
        background getColor('color')

.headerx
  position absolute
  top 0px
  width 100%
  transform translate(0, -100%)
  text-align right
  h2
    font-size .8rem
    font-weight normal
    padding 25px 30px
    font-style: italic;
    font-family poppins

.title-slide
  position absolute
  bottom 40%
  left 0px
  background getColor('color')
  z-index 300
  color getColor('bg')
  padding 8px 15px
  font-style: italic;
  font-size .75rem
  box-shadow 0px 15px 35px 0px rgba(0,0,0,.5)
  transition all .2s ease
  overflow hidden
  pointer-events none
  font-family: poppins
  span
    transition all .25s ease
    display block
    transform translate(-150%) scaleX(0)
    visibility hidden
    position absolute
    opacity 0
    &.active
      opacity 1
      position relative
      transform translate(0%) scaleX(1) !important
      visibility visible
    // span


.img-blur
  filter blur(30px)
  width 100%
  position absolute
  z-index 100
  top 10px
  transform scale(.85)
  opacity .6
  transition opacity .3s ease, top .3s ease
  &.active
    opacity 0
    top 0px

.linea1
  width 1px
  height 100vh
  transform translate(0,-50vh)
  position absolute
  top 50%
  display block
  background getColor('color', .05)
.linea2
  width 1px
  height 100vh
  position absolute
  left 100%
  top 50%
  transform translate(0, -50%)
  display block
  background getColor('color', .05)

.linea3
  width 120vw
  height 1px
  position absolute
  left 50%
  transform translate(-50vw)
  display block
  background getColor('color', .05)

.linea4
  width 100vw
  height 1px
  position absolute
  right 0px
  top 100%
  display block
  background getColor('color', .05)

.linea5
  width 100vw
  height 1px
  position absolute
  left 0px
  top 100%
  display block
  background getColor('color', .05)

.punto
  width 3px
  height 3px
  border-radius 2px
  position absolute
  background getColor('color', 1)
  &.punto1
    left -1px
    top -1px
  &.punto2
    right -2px
    top -1px
  &.punto3
    right -2px
    bottom 79px
  &.punto4
    left -1px
    bottom 79px


// Responsive
@media screen and (max-width: 1000px)
  .footer-right
    width 300px
  .footer-left
    padding-right 300px
    .copyx
      right 300px

@media screen and (max-width: 840px)
  .footer-left
    ul
      padding 20px

@media screen and (max-width: 768px)
  .container
    .con-slides
      flex-direction column
      height auto
      min-height 100vh
      padding 100px 25px
      .title-slide
        display none
      .con-slide
        height calc(100% - 80px)
        top 17px
      .con-footer
        font-weight bold
        padding 0px 10px
        p
          font-size .7rem
        ul
          li
            height 15px
      .headerx
        text-align left
        h2
          padding 10px 20px
          font-weight bold
    .con-slide-1
      margin-top 20px
      .linea4
        left 50%
        transform translate(-50vw)
      .punto4, .punto3
        bottom 0px
    .con-slide-2
      margin-bottom 50px
      .linea5
        left 50%
        transform translate(-50vw)
      .linea2
        top 0px
      .con-footer
        border-top 1px solid getColor('color', .05)
      .punto2
        left 0px
        top auto
        bottom 0px
      .punto3
        bottom 0px
    .con-slide-1, .con-slide-2
      width 100% !important
      height 220px !important
      footer
        height 40px
    .con-slide-2
      .headerx
        bottom 0px
        top auto
        text-align right
        transform translate(0,100%)
    .img-blur
      display none
  .con-content,.container
    position relative
    transform translate(0) !important
  .footer-left
    display block
  .effect-home1,.effect-home2,.effect-home3,.effect-home4
    display none
  .box1
    img
      opacity 1 !important
      transform translate(0) !important
  .con-more
    .box2
      display block
      .sub-box2
        padding-top 50px
        padding-bottom 50px
        .item2
          padding-top 50px
      .sub-box1,.sub-box2
        border-right 1px solid getColor('color', .05)
        width 100%
        max-width 100%
        height auto
        .h2x1, .item2 h2
          position relative
          top 0px
          left 0px
          transform rotate(0)
          padding 30px 10px
          font-size 1.5rem
        .item1,.item2
          opacity 1 !important
          transform translate(0) !important

@media screen and (max-width: 600px)
  .footerx
    display block
    .copyx
      right 0px
      position relative
      width 100%
      text-align center
      padding-bottom 70px
    .footer-right
      display none
    .footer-left
      padding-right 0px

// @media screen and (max-width: 500px)
//   .container
//     .con-slides
//       padding 50px 10px
//   .title-slide
//     bottom 43%
//     left -10px
//   .headerx
//     display none
//   .container
//     padding-left 0px
//     padding-right 0px
//     .con-slide-1
//       .con-slide
//         width 100%
//         left 0px
//         top 0px
//   .linea1
//     display none
//   .punto
//     display none
//   .img-blur
//     display none


@media screen and (max-width: 768px) and (orientation: landscape)
  .container
    padding 0px
    .sub-box1
      .con-imgx
        max-height 300px
        overflow hidden
        display flex
        align-items center
        justify-content center
    .con-footer
      border 1px solid getColor('color', .05)
    .con-slides
      padding 0px
      padding-top 30px
      height auto
      margin-bottom 50px
    .headerx
      display none
    .punto
      display none
    .img-blur
      display none
    .con-slide-1
      height 70vh !important
      margin-top 0px !important
      .con-slide
        height calc(100% - 70px)
        top 10px
      footer
        height 40px
    .con-slide-2
      display none

</style>

