<template>
  <Project
    url="https://www.behance.net/gallery/68564669/Union-Merch"
    :awards="['In', 'Xd']"
    :next="{
      title: 'Red Dead Redemption 2',
      img: 3,
      url: '/projects/red_dead_redemption_2'
      }"
    >
      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/1.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/2.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/3.jpg`"/>

      <div
        class="imagex topx">
        <img
          :src="`${$dev ? '../../' :$https}projects/union_merch/gif4.gif`"
          alt="">
      </div>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/4.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/5.jpg`"/>

      <Img class="bottomx maxlg" :src="`${$dev ? '../../' :$https}projects/union_merch/6.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/7.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/8.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/9.jpg`"/>

      <div
        class="imagex bottomx max">
        <img
          :src="`${$dev ? '../../' :$https}projects/union_merch/gif0.gif`"
          alt="">
      </div>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/10.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/11.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/12.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/13.jpg`"/>

      <Img class="bottomx maxlg" :src="`${$dev ? '../../' :$https}projects/union_merch/14.jpg`"/>

      <Img class="bottomx" :src="`${$dev ? '../../' :$https}projects/union_merch/15.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/16.jpg`"/>

      <Img class="bottomx" :src="`${$dev ? '../../' :$https}projects/union_merch/17.jpg`"/>

      <!-- <Img :src="`${$dev ? '../../' :$https}projects/union_merch/18.png`"/> -->

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/19.png`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/20.jpg`"/>

      <div
        class="imagex topx max">
        <img
          :src="`${$dev ? '../../' :$https}projects/union_merch/gif1.gif`"
          alt="">
      </div>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/21.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/22.jpg`"/>

      <Img class="centerx" :src="`${$dev ? '../../' :$https}projects/union_merch/23.jpg`"/>

      <Img class="maxls topx" :src="`${$dev ? '../../' :$https}projects/union_merch/24.jpg`"/>

      <Img class="max bottomx"  :src="`${$dev ? '../../' :$https}projects/union_merch/25.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/26.jpg`"/>

      <div
        class="imagex topx">
        <img
          :src="`${$dev ? '../../' :$https}projects/union_merch/gif2.gif`"
          alt="">
      </div>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/27.jpg`"/>

      <Img class="maxls topx" :src="`${$dev ? '../../' :$https}projects/union_merch/28.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/29.png`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/30.png`"/>

      <Img class="bottomx maxls" :src="`${$dev ? '../../' :$https}projects/union_merch/31.jpg`"/>

      <Img class="topx" :src="`${$dev ? '../../' :$https}projects/union_merch/32.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/33.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/34.jpg`"/>

      <div
        class="imagex bottomx">
        <img
          :src="`${$dev ? '../../' :$https}projects/union_merch/gif3.gif`"
          alt="">
      </div>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/35.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/36.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/37.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/38.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/39.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/union_merch/gif6.gif`"/>

  </Project>
</template>

<script>
import Project from '~/components/project'
import Img from '~/components/Img'
export default {
  components:{
    Project,
    Img
  },

  mounted() {
    this.$setCssVar('--color', '98,44,255')
    this.$setCssVar('--bg', '238, 241, 246')
  },
}
</script>
