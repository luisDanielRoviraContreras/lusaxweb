<template>

      <Content
        :redes="{
          github: {
            url: 'https://github.com/luisDanielRoviraContreras'
          },
          instagram: {
            url: 'https://www.instagram.com/luisdanielroviracontreras/'
          },
          twitter: {
            url: 'https://twitter.com/luisdfly'
          },
          stackoverflow: {
            url: 'https://es.stackoverflow.com/users/55978/luis-daniel-rovira-contreras'
          },
          medium: {
            url: 'https://medium.com/@luisdanielrovira8'
          },
          linkedin: {
            url: 'https://www.linkedin.com/in/luis-daniel-rovira-contreras'
          },
          codepen: {
            url: 'https://codepen.io/lusaxweb/'
          },
        }"
        name-imgs="luismanuel" next-name="Luis Manuel Rovira" next-url="about/luismanuel" img-social="../../about/luis/6.jpg" header-name="Luis">

      <div slot="header">

        <div class="con-img-2">
          <img
            class="img1 item"
            data-t="4"
            :src="`../../about/luis/1.jpg`" alt="item">
          <img
            class="img1-back item"
            data-t="4"
            data-opacity="0"
            :src="`../../about/luis/1.jpg`" alt="item">
        </div>
        <h1 class="h1">
          Luis Daniel
          <br>
          Rovira
          <span class="spanx">
            Front end Developer
          </span>
        </h1>
      </div>

      <!-- ITEMS -->



      <div data-t="2.5" class="item item1">
        <h2>
          {{ $t('about.titles.hi') }}
        </h2>
        <p>
          {{ $t('about.luis.intro') }}
        </p>
      </div>

      <div class="item2">
        <img
          class="img2"
          :src="`../../about/luis/2.jpg`" alt="item">
      </div>

      <div class="item3">
        <img
          class="img3"
          :src="`../../about/luis/3.jpg`" alt="item">
      </div>

      <div data-t="6" class="item item4">
        <img
          class="img4"
          :src="`../../about/luis/tuti.jpg`" alt="item">
      </div>

      <div  class="item5">
        <h2>
          {{ $t('about.titles.specialties') }}
        </h2>
        <p>
          {{ $t('about.luis.item1') }}
        </p>

        <Cuadros v-model="activeCuadros" :items="['Front end', 'Serverless', 'App']" />
      </div>

      <div data-t="5" class="item item7">
        <img
          class="img5"
          :src="`../../about/luis/4.jpg`" alt="item">
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
              Github
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.color') }}
            </span>
            <span>
              Gris
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.movies') }}
            </span>
            <span>
              La red social
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.games') }}
            </span>
            <span>
              FIFA
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.series') }}
            </span>
            <span>
              Game of Thrones | Friends | The Big Bang Theory
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.characters') }}
            </span>
            <span>
              Iron Man
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.soundtracks') }}
            </span>
            <span>
              Luna Pai, dread mar i, sia
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
      title: `Lusaxweb / About / Luis Daniel Rovira - Front end`,
    }
  },
}
</script>
<style lang="stylus" scoped>

@import('../../../../style/mixin')

.h1
  font-size 2rem
  width 100vw
  margin-left 20% !important
  span
    left 0px
    bottom -40px !important

.item1
  max-width 600px
  margin-left 25%
  padding 30px
  margin-right 15%
  h2
    font-size 2rem
    letter-spacing 2px
    font-weight normal
    padding 30px 0px
    position relative
    display block
    &:after
      content ''
      position absolute
      top 50%
      left 35px
      width calc(100% - 35px)
      height 2px
      background getColor('color', .05)
      display block
  p
    font-family poppins
    font-size .8rem

.item2
  position relative
  img
    max-width 600px
    transform translate(-100px)
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
  padding 30px
  position relative
  h2
    font-size 2rem
    letter-spacing 2px
    font-weight normal
    padding 30px 0px
    position relative
    display block
    font-family Monument
  p
    font-family poppins
    font-size .8rem



.item6
  max-width 500px
  margin auto
  padding 30px
  position relative
  margin-bottom 200px
  z-index 300
  &:after
    content 'Rovira'
    position absolute
    font-size 20rem
    top -250px
    left 50%
    transform translate(-50%)
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: getColor('color', .025);
    color transparent
    font-weight bold
  h2
    font-size 2rem
    letter-spacing 2px
    font-weight normal
    padding 30px 0px
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
  margin-right 0px
  position relative
  img
    width 100%


.con-img-2
  position absolute
  top 150px
  right 50px
  max-width 750px
  width 750px
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
  top -60px
  left -250px
  height 100vh
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: getColor('color', .025);
  color rgba(0, 0, 0, 0)
  font-size 25rem
  display flex
  align-items flex-start
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

@media screen and (max-width: 768px)
  .header
    height auto

    .h1
      font-size 3.5rem
      position absolute
      top 150px
      width 100%
      text-align center
      margin-left 0px !important

  .con-img-2
    position relative
    top 0px
    width 100%
    right 0px
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
      top 100px
      font-size 3rem
@media screen and (max-width: 430px)
  .header
    .h1
      font-size 2rem

@media screen and (max-width: 812px) and (max-height: 500px) and (orientation: landscape)
  .con-img-2
    max-height 60vh
    overflow hidden
  .header
    .h1
      top 50px
      font-size 2.5rem

  .header
    height auto

    .h1
      font-size 3.5rem
      position absolute
      top 150px
      width 100%
      text-align center
      margin-left 0px !important

  .con-img-2
    position relative
    top 0px
    width 100%
    right 0px
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
