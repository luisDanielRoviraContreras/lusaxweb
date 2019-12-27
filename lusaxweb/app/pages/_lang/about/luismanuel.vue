<template>

      <Content
        :redes="{
          linkedin: {
            url: 'https://www.linkedin.com/in/luis-manuel-rovira-cruz-048b99148'
          }
        }"
        name-imgs="lusaxweb" next-name="Lusaxweb" next-url="about/lusaxweb" img-social="../../about/lm/6.jpg" header-name="Luis">

      <div slot="header">

        <div class="con-img-2">
          <img
            class="img1 item"
            data-t="4"
            :src="`../../about/lm/1.jpg`" alt="item">
          <img
            class="img1-back item"
            data-t="4"
            data-opacity="0"
            :src="`../../about/lm/1.jpg`" alt="item">
        </div>
        <h1 class="h1">
          Luis Manuel
          <br>
          Rovira
          <span class="spanx">
            Back end Developer
          </span>
        </h1>
      </div>

      <!-- ITEMS -->



      <div data-t="7" class="item item1">
        <h2>
          {{ $t('about.titles.hi') }}
        </h2>
        <p>
          {{ $t('about.luismanuel.intro') }}
        </p>
      </div>

      <div class="item2">
        <img
          class="img2"
          :src="`../../about/lm/2.jpg`" alt="item">
      </div>

      <div data-t="4" class="item item4">
        <img
          class="img4"
          :src="`../../about/lm/3.jpg`" alt="item">
      </div>

      <div  class="item5">
        <h2>
          {{ $t('about.titles.specialties') }}
        </h2>
        <p>
          {{ $t('about.luismanuel.item1') }}
        </p>

        <Cuadros v-model="activeCuadros" :items="['Back end', 'Server', 'App', 'DevOps']" />
      </div>

      <div data-t="5" class="item item7">
        <img
          class="img5"
          :src="`../../about/lm/4.jpg`" alt="item">
      </div>

      <div data-t="4" class="item item8">
        <img
          class="img5"
          :src="`../../about/lm/5.jpg`" alt="item">
      </div>


      <div class="item6">
        <h2>
          {{ $t('about.titles.favorites') }}
        </h2>
        <ul class="notranslate">
          <li>
            <span>
              {{ $t('about.favorites.red') }}
            </span>
            <span>
              Linkedin
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.color') }}
            </span>
            <span>
              Azul
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.movies') }}
            </span>
            <span>
              Jason Bourne
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.games') }}
            </span>
            <span>
              Ajedrez
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.series') }}
            </span>
            <span>
              Una joya en el palacio
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.characters') }}
            </span>
            <span>
              Novak Đoković
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.soundtracks') }}
            </span>
            <span>
              Bachiana Brasileira No.5 Heitor Villa-Lobos
            </span>
          </li>
        </ul>
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
      title: `Lusaxweb / About / Luis Manuel Rovira - Back end`,
    }
  },
}
</script>
<style lang="stylus" scoped>

@import('../../../../style/mixin')

.h1
  font-size 2rem
  width 70vw
  margin-left 30vw !important
  position relative
  span
    top -40px !important
    right 20vw !important
    position absolute

.item1
  max-width 600px
  margin-left 25%
  padding 20px
  margin-right 15%
  z-index 200
  position relative
  h2
    font-size 2rem
    letter-spacing 2px
    font-weight normal
    padding 30px 0px
    position relative
    display block
  p
    font-family poppins
    font-size .8rem

.item2
  position relative
  margin-left auto
  width 100%
  max-width 400px
  &:after
    content 'Manuel'
    position absolute
    left -60vw
    font-weight bold
    top 200px
    color transparent
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: getColor('color', .025);
    font-size 20rem
  img
    width 100%
    position relative

.item3
  max-width 250px
  width 100%
  margin-left auto
  margin-top 200px
  z-index 200
  position relative
  img
    width 100%
  h2
    font-size 1.5rem
    letter-spacing 2px
    font-weight normal
    padding 15px 0px
    position relative
    display block


.item4
  max-width 450px
  right 0px
  margin-left 10%
  img
    width 100%

.item5
  margin-left 40%
  max-width 700px
  padding 20px
  position relative
  h2
    font-size 2rem
    letter-spacing 2px
    font-weight normal
    padding 20px 0px
    position relative
    display block
    font-family Monument
  p
    font-family poppins
    font-size .8rem



.item6
  max-width 500px
  margin auto
  padding 20px
  position relative
  margin-bottom 200px
  z-index 300
  &:after
    content 'Rovira'
    position absolute
    font-size 20rem
    top -250px
    left 30%
    transform translate(-50%)
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: getColor('color', .025);
    color transparent
    font-weight bold
    transform rotate(90deg)
  h2
    font-size 2rem
    letter-spacing 2px
    font-weight normal
    padding 20px 0px
    position relative
    display block
    font-family Monument
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


.item7
  width 100%
  max-width 250px
  margin-left auto
  position relative
  img
    width 100%


.con-img-2
  position absolute
  top 0px
  left 15%
  max-width 500px
  width 100%
  overflow hidden
  height auto
.img1
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
  right -150px
  height 100vh
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

// responsive
@media screen and (max-width: 1000px)
  .header
    .h1
      font-size 4rem
      position relative
      top 150px
      width 100%
      text-align center
      margin-left 0px !important
@media screen and (max-width: 768px)
  .header
    height auto
    >div
      width 100%
    .h1
      font-size 3.5rem
      position absolute
      bottom 50px
      top auto
      width 100%
      text-align center
      margin-left 0px !important

  .con-img-2
    position relative
    top 0px
    width 100%
    right 0px
    left 0px
@media screen and (max-width: 700px)
  .item1
    margin-left 0px
    width 100%
    margin-right 0px
    max-width none
  .item2
    width 250px
    img
      width 100%
  .item3
    width 200px
    margin-top -100px
    img
      width 100%
  .item4
    width 200px
    margin-top -50px
    img
      width 100%
  .item5
    margin-left 0px
    width 100%
    margin-right 0px
    max-width none
  .item7
    width 200px
    img
      width 100%
@media screen and (max-width: 500px)
  .item6
    margin-bottom 50px
    ul
      li
        span
          &:last-child
            width auto
            text-align right
  .header
    .h1
      bottom 100px
      font-size 3rem
@media screen and (max-width: 430px)
  .header
    .h1
      font-size 2rem

@media screen and (max-width: 812px) and (max-height: 500px) and (orientation: landscape)
  .con-img-2
    max-height 60vh
    overflow hidden
    width 100% !important
    max-width none !important
    img
      width 100% !important
      max-width none !important
      transform translate(0,-150px)
  .header
    .h1
      top 70px
      font-size 2.5rem

  .header
    height auto
    >div
      width 100%
    .h1
      font-size 3.5rem
      position absolute
      bottom 50px
      top auto
      width 100%
      text-align center
      margin-left 0px !important

  .con-img-2
    position relative
    top 0px
    width 100%
    right 0px
    left 0px

  .item1
    margin-left 0px
    width 100%
    margin-right 0px
    max-width none
  .item2
    width 250px
    img
      width 100%
  .item3
    width 200px
    margin-top -100px
    img
      width 100%
  .item4
    width 200px
    margin-top -50px
    img
      width 100%
  .item5
    margin-left 0px
    width 100%
    margin-right 0px
    max-width none
  .item7
    width 200px
    img
      width 100%
</style>
