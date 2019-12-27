<template>
    <div :class="{'mobile': mobile}" class="content-about">

      <Back to="about" />

      <!--
        NOTE: Cuadro de progreso de la barra de navegacion
       -->

      <div
        @click="up"
        @mouseenter="mouseenterUp"
        ref="cuadro" class="cuadro">
        <div ref="line1" class="line1 line" />
        <div ref="line2" class="line2 line" />
        <div ref="line3" class="line3 line" />
        <div ref="line4" class="line4 line" />

        <i class="flaticon-up-arrow">
        </i>
      </div>

      <div ref="content" class="content">
        <header class="header" ref="header">
          <slot name="header"></slot>

          <h3 ref="letras" class="letras">
            <span
              class="letra"
              :key="i"
              v-for="(letra, i) in getLetras">
              {{ letra.letra }}
            </span>
          </h3>
        </header>

        <slot></slot>

        <Social :redes="redes" v-if="imgSocial" :img="imgSocial" />

        <Next :class-hover="nameImgs" v-if="nextUrl" :name="nextName" :url="nextUrl" />
      </div>

    </div>
</template>
<script>
import Social from './social'
import Back from '../back'
import Next from './next'
export default {
  components: {
    Social,
    Back,
    Next
  },
  props:{
    redes: {
      default: null,
      type: Object
    },
    headerName: {
      default: null,
      type: String,
      required: true
    },
    nameImgs: {
      default: null,
      type: String,
    },
    imgSocial:{
      default: null,
      type: String
    },
    nextUrl:{
      default: null,
      type: String
    },
    nextName:{
      default: null,
      type: String
    }
  },
  data:() => ({
    mobile: false
  }),
  mounted() {
    this.mobile = this.mobileAndTabletcheck
    this.$setCssVar('--color', '255,255,255')
    this.$setCssVar('--bg', '15, 15, 19')

    document.querySelector('html').style.overflow = 'auto'
    if(!this.mobile) {
      this.$nextTick(() => {
        this.smooth()
      })
    }
  },
  beforeDestroy() {
    document.body.style.height = 'auto'
    document.querySelector('html').style.overflow = 'hidden'
    cancelAnimationFrame(this.animate)
  },
  computed:{
    mobileAndTabletcheck() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    },
    getLetras() {
      let letras = this.headerName.split('')
      let newLetras = []
      letras.forEach((letra, i) => {
        newLetras.push({
          letra,
          i,
          transform: (offset) => {
            return `translate(0, -${offset / 4}%)`
          }
        })
      })
      return newLetras
    },
  },
  methods:{
    mouseenterUp(evt) {
      if(!evt.target.classList.contains('up')) return
      this.$toggleClass(evt, 'up')
    },
    up(evt) {
      if(!evt.target.classList.contains('up')) return
      document.querySelector('html').scrollTop = 0

      let mouse = document.querySelector('.mouse')
      mouse.classList.remove('up')
    },
    smooth() {
      const body = document.body,
      contentx = document.querySelector('.content'),
      height = contentx.clientHeight - 1,
      speed = 0.05

      var raf

      var offset = 0

      var smoothScroll = () => {
        body.style.height = Math.floor(contentx.clientHeight) + "px"
        let topx = window.pageYOffset
        offset += (topx - offset) * speed

        var scroll = "translateY(-" + offset + "px) translateZ(0)"
        contentx.style.transform = scroll


        var h = document.querySelector('html'),
            st = 'scrollTop',
            sh = 'scrollHeight';

        var percent = (h[st]) / ((h[sh] / 4) - h.clientHeight / 4) * 100;

        this.$refs.line1.style.width = `${percent}%`
        this.$refs.line2.style.height = `${percent > 100 ? percent - 100 : 0}%`
        this.$refs.line3.style.width = `${percent > 200 ? percent - 200 : 0}%`
        this.$refs.line4.style.height = `${percent > 300 ? percent - 300 : 0}%`

        if(percent >= 390) {
          this.$refs.cuadro.classList.add('up')
        } else {
          this.$refs.cuadro.classList.remove('up')
        }

        // move letras

        let letras = this.$refs.letras.querySelectorAll('.letra')
        let transforms = {
          transform0() {
            return `translate(0, -${offset / 4}%)`
          },
          transform1() {
            return `translate(-${offset / 3}%, ${offset / 9}%)`
          },
          transform2() {
            return `translate(0, -${offset / 1.2}%)`
          },
          transform3() {
            return `translate(0, ${offset / 4}%)`
          },
          transform4() {
            return `translate(0, ${offset / 6}%)`
          },
          transform5() {
            return `translate(${offset / 8}%, ${offset / 3}%)`
          },
          transform6() {
            return `translate(0, ${offset / 14}%)`
          },
          transform7() {
            return `translate(0, -${offset / 4}%)`
          },
          transform8() {
            return `translate(-${offset / 3}%, ${offset / 9}%)`
          },
          transform9() {
            return `translate(0, -${offset / 1.2}%)`
          },
          transform10() {
            return `translate(0, ${offset / 4}%)`
          },
          transform11() {
            return `translate(0, ${offset / 6}%)`
          },
          transform12() {
            return `translate(${offset / 8}%, ${offset / 3}%)`
          },
          transform13() {
            return `translate(0, ${offset / 14}%)`
          }
        }

        letras.forEach((letra, i) => {
          let transformx = transforms[`transform${i}`]
          letra.style.transform = transformx()
        })
        let _this = this
        async function transformsItems() {
          let items = _this.$refs.content.querySelectorAll('.item')


          items.forEach((item) => {
            item.style.transform = `translateY(${item.dataset.sign || '+'}${offset / item.dataset.t}px)`
            // if(!item.dataset.margin) {
            //
            // } else {
            //   }
              // item.style.marginBottom = `${item.dataset.sign || '+'}${(offset / 15) / item.dataset.t}%`
          })
        }


        transformsItems()
        // let h1 = this.$refs.h1

        // h1.style.transform = `translate(-${offset / 12}%)`

        // let img1 = this.$refs.img1
        // let img2 = this.$refs.img2
        // let img3 = this.$refs.img3
        // let img3two = this.$refs.img3two
        // let img4 = this.$refs.img4
        // let img5 = this.$refs.img5
        // let img6 = this.$refs.img6

        // img1.style.transform = `translate(0, -${offset / 3}%)`
        // img2.style.transform = `translate(0, -${offset / 5}%)`
        // img3.style.transform = `translate(0, -${offset / 6}%)`
        // img3two.style.transform = `translate(0, -${offset / 2.5}%)`
        // img4.style.transform = `translate(0, -${offset / 5}%)`
        // img5.style.transform = `translate(0, -${offset / 7}%)`
        // img6.style.transform = `translate(0, -${offset / 14}%)`

        // let p1 = this.$refs.p1
        // let p2 = this.$refs.p2
        // let p3 = this.$refs.p3
        // let p4 = this.$refs.p4

        // p1.style.transform = `translate(0, -${offset / 3}%)`
        // p2.style.transform = `translate(0, -${offset / 4}%)`
        // p3.style.transform = `translate(0, -${offset / 7}%)`
        // p4.style.transform = `translate(0, -${offset / 20}%)`


        this.animate = requestAnimationFrame(smoothScroll)
      }
      smoothScroll()
    },
  }
}
</script>

<style scoped lang="stylus">

@import('../../../style/mixin')

.header
  height 100vh
  position relative
  display flex
  align-items center
  justify-content center
  .h1
    z-index 500
    position relative
    font-size 5rem
    font-family Monument
    text-align left
    font-weight normal
    span
      font-size 1rem
      font-weight normal
      position absolute
      bottom -15px
      right 5px
      font-family poppins

.content-about
  width 100%
  min-height 100%
  position fixed
  left 0px
  top 0px
  background getColor('bg', 1)
  z-index 5000
  color getColor('color', 1)
  overflow hidden

  .content
    position relative
    height auto
    width 100%
    overflow hidden
    min-height 2000px



.backx
  position fixed
  top 0px
  left 0px
  width 45px
  height 45px
  background transparent
  border 1px solid getColor('color', 1)
  margin 20px
  color getColor('color', 1)
  z-index 6000
  transition all .2s ease
  display flex
  align-items center
  justify-content center
  outline none
  text-decoration none
  &:hover
    transform scale(1.2)
    i
      opacity 0
      transform scale(.2)
  i
    font-size 1.1rem
    font-weight normal
    transition all .2s ease

.cuadro
  position fixed
  bottom 0px
  z-index 6000
  width 80px
  height 80px
  border 1px solid getColor('color', .05);
  right 0px
  bottom 0px
  margin 25px
  transition all .3s ease
  display flex
  align-items center
  justify-content center
  i
    font-size .8rem
    color getColor('color', 0);
    transition all .2s ease
    pointer-events none
  &.up
    width 45px
    height 45px
    border 1px solid getColor('color', 1);
    &:hover
      transform scale(1.2)
      i
        opacity 0
        transform scale(.4)
    i
      font-size .8rem
      color getColor('color', 1) !important

  .line
    background getColor('color', 1);
    position absolute
    max-width 101% !important
    max-height 101% !important

    &.line1
      left 0px
      top -1px
      width 0%
      height 1px
    &.line2
      right -1px
      top 0px
      width 1px
      height 0%
    &.line3
      bottom -1px
      right 0px
      width 0%
      height 1px
    &.line4
      left -1px
      bottom 0px
      width 1px
      height 0%

// responsive

.mobile
  overflow auto !important
  position relative !important
  .content
    position relative !important


@media screen and (max-width: 768px)
  .header
    height auto
    .h1
      font-size 4rem
      position absolute
      top 100px
      width 100%
      text-align center
  .cuadro
    display none
  .content-about
    overflow auto
    position relative
  .content
    position relative

@media screen and (max-width: 500px)
  .header
    .h1
      font-size 3rem
@media screen and (max-width: 430px)
  .header
    .h1
      font-size 2rem

@media screen and (max-width: 812px) and (max-height: 500px) and (orientation: landscape)
  .header
    height auto
    .h1
      font-size 4rem
      position absolute
      top 100px
      width 100%
      text-align center
  .cuadro
    display none
  .content-about
    overflow auto
    position relative
  .content
    position relative

@media screen and (max-width: 812px) and (max-height: 430px) and (orientation: landscape)
  .header
    .h1
      font-size 2rem
</style>
