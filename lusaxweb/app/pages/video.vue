<template>
  <div class="container">
    <div class="con-404">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278.86 329">
        <path d="M278.86,250.7,139.43,0,0,250.7H36.4L10.3,298.09h97.54L139.43,329,171,298.09h97.53l-26.1-47.39ZM149.73,227.35v45h-20.6v-45L90,239.71l49.45-100.28,49.45,100.28Zm-10.3-158L46.71,234.9H24L139.43,34.34,254.82,234.9H232.15Z"/>
      </svg>
      <LoadingAnimate />
      <h1>404</h1>
      <p>
        Oops! <a href=""></a>
      </p>
    </div>
    <!-- <video frameborder="0" loop autoplay muted src="/Playa.mp4"></video> -->
  </div>
</template>
<script>
export default {
  mounted() {
    this.$setCssVar('--color', '255,255,255')
    this.$setCssVar('--bg', '15, 15, 19')
  }
}
</script>
<style lang="stylus">
.container
  position relative
  height 100vh
  width 100vw
  overflow hidden

video
  position relative
  min-height 100vh
  min-width 100vw
  z-index 100
svg
  width 200px
  fill rgb(255,255,255)
.con-404
  position absolute
  top 50%
  left 50%
  transform translate(-50%,-50%)
  z-index 200
  display flex
  align-items center
  justify-content center
  flex-direction column
  mix-blend-mode: exclusion;
  height 100vh
  >>>img
    max-width 150px
  h1
    font-size 3.5rem
    color rgb(255,255,255)
    margin 20px
    font-family Monument
  p
    font-family poppins
    font-size 1.5rem
</style>

