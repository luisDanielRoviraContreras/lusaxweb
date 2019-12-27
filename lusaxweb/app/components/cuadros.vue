<template>
  <ul>
    <li
      :key="index"
      @click="$emit('input', index)"
      v-for="(item, index) in items"
      :class="{'active': value == index}"
      >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  props:{
    items: {
      default: null,
      type: Array | Object
    },
    value:{
      default: 0,
      type: Number
    }
  }
}
</script>
<style lang="stylus" scoped>
@import('../../style/mixin')
ul
  width 230px
  display flex
  align-items center
  justify-content flex-start
  padding 40px 0px
  flex-wrap wrap
  position relative
  z-index 2000
  li
    width 100px
    height 100px
    border 2px solid getColor('color', 1)
    display flex
    align-items flex-end
    justify-content flex-end
    padding 10px
    margin-right 15px
    margin-bottom 15px
    font-size .8rem
    font-family poppins
    transition all .25s ease
    &:hover
      padding-bottom 15px
    // &.active,&:active
    //   background getColor('color', 1)
    //   color getColor('bg', 1)
    //   font-weight bold
    //   box-shadow 0px 0px 15px 0px getColor('color', .15)
    &:first-child
      margin-left 0px

@media screen and (max-width: 812px) and (max-height: 500px) and (orientation: landscape)
  ul
    width 100%
</style>
