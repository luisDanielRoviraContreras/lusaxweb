<template>
  <div class="con-admin">
    <nuxt />
  </div>
</template>
<script>
export default {
  mounted() {
    window.addEventListener("load", this.load);
  },
  methods:{
    load() {
      setTimeout(() => {
        this.$nuxt.$loading.finish()
      }, 1000);
    },
  }
}
</script>
<style lang="stylus" scoped>
.con-admin
  background rgb(255,255,255)
</style>
