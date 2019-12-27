<template>
  <Project
    url="https://www.behance.net/gallery/68564669/Union-Merch"
    :awards="['In', 'Xd']"
    :next="{
      title: 'Stranger things',
      img: 6,
      url: '/works'
      }"
    :prox="true"
    >
      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/1.png`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/2.jpg`"/>


      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/3.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/20.gif`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/4.jpg`"/>

      <!-- <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/5.jpg`"/> -->

      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/6.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/7.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/8.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/21.gif`"/>



      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/9.jpg`"/>

      <Img class="heightx" :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/10.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/11.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/12.jpg`"/>

      <div
        class="imagex centerx">
          <video frameborder="0" loop autoplay muted ::src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/22.mp4`" type="video/mp4"></video>
      </div>


      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/13.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/14.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/15.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/16.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/23.gif`"/>



      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/17.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/18.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/red_dead_redemption_2/19.jpg`"/>


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
    this.$setCssVar('--color', '239,21,36')
    this.$setCssVar('--bg', '0, 0, 0')
  },
}
</script>
