<template>

      <Content
        :redes="{
          behance: {
            url: 'https://behance.net/ManuelRovira'
          },
          instagram: {
            url: 'https://www.instagram.com/manuelroviradesign/'
          },
          dribbble: {
            url: 'https://dribbble.com/manuelrovira'
          },
          linkedin: {
            url: 'https://www.linkedin.com/in/manuel-rovira/'
          },
          vimeo: {
            url: 'https://vimeo.com/manuelrovira'
          },
        }"
        name-imgs="luisdaniel" next-name="Luis Daniel Rovira" next-url="about/luisdaniel" img-social="../../about/manuel/8.jpg" header-name="Manuel">



      <div slot="header">

        <div class="con-img-2">
          <img
            class="img2 item"
            data-t="4"
            :src="`../../about/manuel/2.jpg`" alt="item">
        </div>
        <h1 class="h1">
          Manuel
          <br>
          Rovira
        </h1>
      </div>

      <!-- ITEMS -->

      <div class="item1">
        <h2>
          {{ $t('about.titles.hi') }}
        </h2>
        <p>
          {{ $t('about.manuel.intro') }}
        </p>
      </div>

      <div data-t="6" class="item item2">
        <img
          class="img3"
          :src="`../../about/manuel/3.jpg`" alt="item">
      </div>

      <div class="item3">
        <h2>
          {{ $t('about.titles.specialties') }}
        </h2>
        <p>
          {{ $t('about.manuel.item1') }}
        </p>

        <Cuadros v-model="activeCuadros" :items="['UX', 'UI', 'Illustration', 'Branding']" />
      </div>

      <div data-t="5" class="item item4">
        <img
          class="img4"
          :src="`../../about/manuel/4.jpg`" alt="item">
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

      <div data-t="6" class="item item6">
        <img
          class="img5"
          :src="`../../about/manuel/5.jpg`" alt="item">
      </div>

      <div class="item7">
        <img
          data-t="14"
          class="img6 item"
          :src="`../../about/manuel/6.jpg`" alt="item">
        <img
          data-t="14"
          class="img6-back item"
          :src="`../../about/manuel/6.jpg`" alt="item">
      </div>

      <div class="item8">
        <h2>
          {{ $t('about.titles.favorites') }}
        </h2>
        <ul class="notranslate">
          <li>
            <span>
              {{ $t('about.favorites.red') }}
            </span>
            <span>
              Behance
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.color') }}
            </span>
            <span>
              Black
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.movies') }}
            </span>
            <span>
              Blade Runner 2049
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.games') }}
            </span>
            <span>
              Age Of Empires 2
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.series') }}
            </span>
            <span>
              Dark
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.characters') }}
            </span>
            <span>
              Rocket (Guardians of the Galaxy)
            </span>
          </li>
          <li>
            <span>
              {{ $t('about.favorites.soundtracks') }}
            </span>
            <span>
              Interstellar Hans Zimmer
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
      title: `Lusaxweb / About / Manuel Rovira - Designer`,
    }
  },
}
</script>
<style lang="stylus" scoped>

@import('../../../../style/mixin')

.h1
  font-size 2rem

.item1
  max-width 600px
  margin-left auto
  padding 20px
  margin-right 15%
  p
    font-family poppins
    font-size .8rem
  h2
    font-size 1.5rem
    letter-spacing 2px
    font-weight normal
    padding 15px 0px
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

.item2
  position relative
  img
    max-width 300px
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
  p
    font-size .8rem
    font-family poppins
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
  padding 30px
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
  margin-left auto
  margin-right 0px
  margin-right -50px
  margin-top 100px
  img
    width 100%
    margin 0px
    display block

.item7
  max-width 500px
  margin-left 15%
  margin-right 0px
  position relative
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
  padding 30px
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


.img1
  position absolute
  top -150px
  left 100px
.con-img-2
  position absolute
  top 150px
  right 0px
  max-width 750px
  width 100%
  overflow hidden
  height auto
.img2
  position relative
  width 100%
  z-index 200
  opacity 1

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

@media screen and (max-width: 768px)
  .header
    height auto
    .h1
      font-size 4rem
      position absolute
      top 100px
      width 100%
      text-align center
  .con-img-2
    position relative
    top 0px
  .item1
    width 100%
    max-width auto
    margin-top 80px
  .item2
    width 250px
    img
      width 100%
  .item3
    margin 0px
    width 100%
    max-width auto
    padding 30px
  .item4
    width 300px
    transform translate(0)
    img
      width 100%
  .item6
    width 200px
    margin-top 50px
    margin-bottom 50px
    transform translate(0)
    img
      width 100%
  .item7
    width 100%
    margin 0px
    max-width none
    .img6
      opacity 1
    .img6-back
      display none
    img
      display block
      width 100%
  .item8
    margin-top 50px
    margin-bottom 50px

@media screen and (max-width: 500px)
  .item5
    ul
      li
        font-size .65rem
  .item8
    margin-bottom 50px
    ul
      li
        font-size .65rem
        span
          &:last-child
            width auto
            text-align right
  .header
    .h1
      font-size 3rem
@media screen and (max-width: 430px)
  .header
    .h1
      font-size 2rem

@media screen and (max-width: 812px) and (max-height: 500px) and (orientation: landscape)
  .item1
    margin-top 30px
  .con-img-2
    max-height 60vh
    overflow hidden
  .item7
    max-height 60vh
    overflow hidden

  .header
    height auto
    .h1
      font-size 4rem
      position absolute
      top 100px
      width 100%
      text-align center
  .con-img-2
    position relative
    top 0px
  .item1
    width 100%
    max-width auto
    margin-top 80px
  .item2
    width 250px
    img
      width 100%
  .item3
    margin 0px
    width 100%
    max-width auto
    padding 30px
  .item4
    width 300px
    transform translate(0)
    img
      width 100%
  .item6
    width 200px
    margin-top 50px
    margin-bottom 50px
    transform translate(0)
    img
      width 100%
  .item7
    width 100%
    margin 0px
    max-width none
    .img6
      opacity 1
    .img6-back
      display none
    img
      display block
      width 100%
  .item8
    margin-top 50px
    margin-bottom 50px
</style>
