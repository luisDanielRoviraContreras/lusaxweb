<template>
  <div
    class="backx-component"
    @mouseenter="$toggleClass($event, 'back')"
    >
    <nuxt-link
      class="backx"

      :to="$i18n.path(to)">
      <i class="flaticon-return">
      </i>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props:{
    to: {
      default: 'projects',
      type: String
    }
  },
}
</script>
<style lang="stylus" scoped>
@import('../../style/mixin')
.backx
  position fixed
  top 0px
  left 0px
  width 45px
  height 45px
  background getColor('bg', .2)
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
    font-size .9rem
    font-weight normal
    transition all .2s ease
</style>
