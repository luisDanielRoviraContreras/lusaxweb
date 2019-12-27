<template>
  <div
    @mouseenter="sticky ? $stickyMove($event, 'img') : null"
    class="imagex">
    <img
      :src="src"
      :alt="alt">
  </div>
</template>
<script>
export default {
  props:{
    sticky: {
      default: false,
      type: Boolean
    },
    src: {
      default: null,
      type: String,
    },
    alt: {
      default: null,
      type: String,
    }
  }
}
</script>
