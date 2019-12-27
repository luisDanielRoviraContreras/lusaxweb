<template>

      <Content name-imgs="manuel" next-name="Manuel Rovira" next-url="about/manuel" header-name="Lusaxweb">



      <div slot="header">

        <div class="con-img-2">
          <img
            class="img2 item"
            data-t="4"
            :src="`../../about/1.jpg`" alt="item">
          <img
            class="img2-back item"
            data-t="4"
            data-opacity="0"
            :src="`../../about/1.jpg`" alt="item">

          <div class="con-text">
            <h2>{{ $t('about.titles.intro') }}</h2>

            <p>
              {{ $t('about.lusaxweb.intro') }}
            </p>
          </div>
        </div>



        <div class="h1">
          <img :src="`../../lusaxweb-2.png`" alt="">
        </div>
      </div>

      <!-- ITEMS -->

      <div data-margin="true" data-t="3" class="item item1">
        <h2>
          {{ $t('about.titles.specialties') }}
        </h2>
        <p>
          {{ $t('about.lusaxweb.item1') }}
        </p>

        <Cuadros v-model="activeCuadros" :items="['UX', 'UI', 'Illustration', 'Branding']" />
      </div>

      <div  class="item2">
        <img
          class="img3"
          :src="`../../about/2.jpg`" alt="item">
      </div>



      <div data-t="5" class="item item4">
        <img
          class="img4"
          :src="`../../about/3.jpg`" alt="item">
      </div>

      <div data-t="10" class="item item5">
        <h2>
          {{ $t('about.titles.awards') }}
        </h2>
        <ul class="notranslate">
          <li>
            <span>
              Behance / Game of Thrones
            </span>
            <span>
              Adobe Xd
            </span>
          </li>
          <li>
            <span>
              Behance / Game of Thrones
            </span>
            <span>
              Adobe Interaction
            </span>
          </li>
          <li>
            <span>
              Behance / Red Dead Redemption 2
            </span>
            <span>
              Adobe Xd
            </span>
          </li>
          <li>
            <span>
              Behance / Red Dead Redemption 2
            </span>
            <span>
              Adobe Interaction
            </span>
          </li>
          <li>
            <span>
              Behance / Union Merch
            </span>
            <span>
              Adobe Xd
            </span>
          </li>
          <li>
            <span>
              Behance / Union Merch
            </span>
            <span>
              Adobe Interaction
            </span>
          </li>
          <li>
            <span>
              Behance / Avengers Infinity War
            </span>
            <span>
              Adobe Interaction
            </span>
          </li>
        </ul>
      </div>

      <div data-t="12" class="item item6">
        <img
          class="img5"
          :src="`../../about/4.jpg`" alt="item">
      </div>

      <div class="item7">
        <h2 v-html="$t('about.titles.family')" data-t="5" class="item" />
        <img
          data-t="7"
          class="img6 item"
          :src="`../../about/lusaxweb-1.jpg`" alt="item">
        <img
          data-t="7"
          class="img6-back item"
          :src="`../../about/lusaxweb-1.jpg`" alt="item">
      </div>





    </Content>
</template>
<script>
import Content from '@/components/about/content'
import Cuadros from '@/components/cuadros'
export default {
  components:{
    Content,
    Cuadros
  },
  data:() => ({
    animate: null,
    activeCuadros: 0
  }),
  head () {
    return {
      title: `Lusaxweb / About`,
    }
  },
}
</script>
<style lang="stylus" scoped>

@import('../../../../style/mixin')

.con-text
  position relative
  z-index 200
  h2
    font-family Monument
    padding 30px 0px
    font-weight normal
    font-size 2rem
    position relative
    display block
    &:after
      content: ''
      position absolute
      top 50%
      transform translate(0,-50%)
      height 2px
      background getColor('color', .05)
      width 100%
  p
    font-family poppins

.h1
  font-size 2rem

.item1
  max-width 600px
  margin-left 20%
  padding 20px
  z-index 3000
  display block
  position relative
  margin-top 200px
  h2
    font-size 1.5rem
    letter-spacing 2px
    font-weight normal
    padding 15px 0px
    position relative
    display block
    font-family Monument
  p
    font-family poppins

.item2
  position relative
  z-index 100
  margin-top -200px
  img
    max-width 500px
    transform translate(-100px)
    position relative

.item3
  max-width 600px
  margin-left 10%
  padding 20px
  margin-right auto
  margin-top 200px
  z-index 200
  position relative
  h2
    font-size 1.5rem
    letter-spacing 2px
    font-weight normal
    padding 15px 0px
    position relative
    display block
    font-family Monument


.item4
  max-width 450px
  margin-left auto
  margin-right 0px
  transform translate(0,-150px)
  right 0px
  img
    width 100%

.item5
  max-width 700px
  margin auto
  padding 20px
  position relative
  &:after
    content: "\f100"
    font-family Flaticon
    position absolute
    left -200px
    bottom -260px
    font-size 25rem
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: getColor('color', .025);
    color transparent
  h2
    font-size 2rem
    letter-spacing 2px
    font-weight normal
    padding 20px 0px
    position relative
    display block
  ul
    width 100%
    li
      width 100%
      display flex
      align-items center
      justify-content space-between
      padding 15px 0px
      font-family poppins
      font-size .85rem
      span
        &:last-child
          text-align right

.item6
  max-width 300px
  margin-left 0px
  margin-top 100px
  img
    width 100%
    margin 0px
    display block

.item7
  max-width 700px
  margin auto
  position relative
  margin-bottom 800px
  h2
    position absolute
    font-size 4rem
    font-family Monument
    z-index 400
    top 0px
    font-weight normal
    right -100px
  .img6
    position relative
    width 100%
    z-index 200
    opacity .8
  .img6-back
    transition all .3s ease-out

.item8
  max-width 500px
  margin auto
  padding 20px
  position relative
  margin-top 100px
  margin-bottom 200px
  z-index 300
  h2
    font-size 2rem
    letter-spacing 2px
    font-weight normal
    padding 20px 0px
    position relative
    display block
  ul
    width 100%
    li
      width 100%
      display flex
      align-items center
      justify-content space-between
      padding 15px 0px
      font-family poppins
      font-size .85rem
      span
        text-align left
        &:last-child
          width 70%


.img1
  position absolute
  top -150px
  left 100px
.con-img-2
  position absolute
  top -150px
  right 10%
  max-width 500px
  width 100%
  overflow hidden
  height auto
.img2
  position relative
  width 100%
  z-index 200
  opacity .8

img[class*=back]
  position absolute
  top 0px
  left 0px
  opacity .2
  // filter hue-rotate(90deg) saturate(10);
  filter grayscale(1)
  width 100%
  z-index 300
  transition all .2s ease-out
.item
  h2
    font-family Monument
  p
    font-family poppins
    font-size .8rem

>>>.letras
  width 100%
  position absolute
  top 0px
  height 120vh
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: getColor('color', .025);
  color rgba(0, 0, 0, 0)
  font-size 25rem
  display flex
  align-items flex-end
  justify-content center
  text-align center
  font-family Monument
  font-weight normal
  span
    display inline-block
    padding 0px
    margin 0px
    position relative


// resposive

@media screen and (max-width: 875px)
  .item7
    width calc(100% - 30px)
    max-width none
    margin-left 15px
    h2
      left 50px
      right auto
    img
      width 100%
@media screen and (max-width: 768px)
  .header
    height auto !important
    justify-content flex-start !important
    >div
      width 100%
    .h1
      width 100%
      padding 50px
      padding-top 100px
      position absolute
      top 0px
      text-align center
      img
        width 100%
        padding 20px
  .con-img-2
    position relative
    right auto
    left 0px
    padding 30px
    .img2
      opacity 1
    .img2-back
      display none
  .item1
    margin-left 0px
    padding 40px
    width 100%
    max-width none
    margin-top 0px
  .item2
    margin-top 0px
    width 250px
    img
      width 100%
      margin-top -250px
  .item4
    transform translate(0)
    width 250px
    img
      width 100%
      margin-top -50px
  .item7
    margin-bottom 100px
    margin-top 100px
    h2
      bottom -30px
      top auto
      font-size 3rem
  .item5
    padding 30px
  .item6
    width 150px
    img
      width 100%
@media screen and (max-width: 500px)
  .item5
    ul
      li
        font-size .7rem
  .item7
    margin-bottom 0px !important
    h2
      font-size 2rem

@media screen and (max-width: 812px) and (max-height: 500px) and (orientation: landscape)
  .item7
    max-height 80vh
    overflow hidden
    h2
      bottom 30px
  .h1
    width 80% !important
    margin-left 10% !important
  .con-img-2
    img
      width 300px

  .header
    height auto !important
    justify-content flex-start !important
    >div
      width 100%
    .h1
      width 100%
      padding 50px
      padding-top 100px
      position absolute
      top 0px
      text-align center
      img
        width 100%
        padding 20px
  .con-img-2
    position relative
    right auto
    left 0px
    padding 30px
    .img2
      opacity 1
    .img2-back
      display none
  .item1
    margin-left 0px
    padding 40px
    width 100%
    max-width none
    margin-top 0px
  .item2
    margin-top 0px
    width 250px
    img
      width 100%
      margin-top -250px
  .item4
    transform translate(0)
    width 250px
    img
      width 100%
      margin-top -50px
  .item7
    margin-bottom 100px
    margin-top 100px
    h2
      bottom -30px
      top auto
      font-size 3rem
  .item5
    padding 30px
  .item6
    width 150px
    img
      width 100%
</style>
