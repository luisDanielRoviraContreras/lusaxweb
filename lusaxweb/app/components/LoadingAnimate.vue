<template>
  <div
    class="loading-animate">
      <img v-show="image == img" v-for="img in max" :key="img" class="imgx" :src="`/load/${img}_opt_mobile.png`" :srcset="`/load/${img}_opt.png 768w`" alt="">
  </div>
</template>
<script>
export default {
  data:() => ({
    image: 1,
    max: 33
  }),
  created() {
    setInterval(() => {
      if (this.image == this.max) this.image = 0
      let ramdom = Math.round(Math.random() * (this.max - 1) + 1)
      this.image = ramdom == this.image ? this.max == ramdom ? ramdom + 1 : ramdom - 1 : ramdom
    }, 120);
  },
  beforeDestroy() {
    let mouse = document.querySelector('.mouse')
    if(mouse) {
      mouse.classList.remove('hover--logo')
    }
  }
}
</script>
<style lang="stylus" scoped>
@import('../../style/mixin')
  .imgx
    width 100%
  .loading-animate
    position relative
    z-index 5000
    color getColor('color')
    opacity 1
    transition all .3s ease
    max-width 200px
    max-height 200px

.h2x
  font-size 1rem
</style>
