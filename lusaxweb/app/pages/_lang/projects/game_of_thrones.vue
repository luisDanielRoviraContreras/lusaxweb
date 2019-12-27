<template>
  <Project
    url="https://www.behance.net/gallery/77914079/Game-of-Thrones"
    :awards="['In', 'Xd']"
    :next="{
    title: 'Union Merch',
    img: 9,
    url: '/projects/union_merch'
    }">

      <Img sticky :src="`${$dev ? '../../' :$https}projects/game_of_thrones/0.png`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/game_of_thrones/1.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/game_of_thrones/2.jpg`"/>

      <Img sticky :src="`${$dev ? '../../' :$https}projects/game_of_thrones/3.jpg`"/>

      <div
        class="imagex">
        <img
          :src="`${$dev ? '../../' :$https}projects/game_of_thrones/4.jpg`"
          alt="">

        <img
          class="absolutex"
          :src="`${$dev ? '../../' :$https}projects/game_of_thrones/5.png`"
          alt="">
      </div>

      <Img :src="`${$dev ? '../../' :$https}projects/game_of_thrones/6.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/game_of_thrones/7.jpg`"/>

      <Img sticky :src="`${$dev ? '../../' :$https}projects/game_of_thrones/8.png`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/game_of_thrones/9.jpg`"/>

      <Img class="bottomx" sticky :src="`${$dev ? '../../' :$https}projects/game_of_thrones/10.png`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/game_of_thrones/11.jpg`"/>

      <div
        class="imagex centerx">
          <video frameborder="0" loop autoplay muted :src="`${$dev ? '../../' :$https}projects/game_of_thrones/11.mp4`" type="video/mp4"></video>
      </div>

      <Img class="bottomx" sticky :src="`${$dev ? '../../' :$https}projects/game_of_thrones/12.jpg`"/>

      <Img class="topx" sticky :src="`${$dev ? '../../' :$https}projects/game_of_thrones/13.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/game_of_thrones/14.jpg`"/>

      <Img class="topx max" sticky :src="`${$dev ? '../../' :$https}projects/game_of_thrones/15.jpg`"/>

      <!-- <Img :src="`${$dev ? '../../' :$https}projects/game_of_thrones/16.jpg`"/> -->

      <Img :src="`${$dev ? '../../' :$https}projects/game_of_thrones/17.jpg`"/>

      <!-- <Img :src="`${$dev ? '../../' :$https}projects/game_of_thrones/18.jpg`"/> -->

      <Img :src="`${$dev ? '../../' :$https}projects/game_of_thrones/19.jpg`"/>

      <Img class="bottomx max" sticky :src="`${$dev ? '../../' :$https}projects/game_of_thrones/20.png`"/>

      <Img class="maxls topx" :src="`${$dev ? '../../' :$https}projects/game_of_thrones/21.png`"/>

      <Img class="maxls" :src="`${$dev ? '../../' :$https}projects/game_of_thrones/22.png`"/>

      <Img class="maxls bottomx" :src="`${$dev ? '../../' :$https}projects/game_of_thrones/23.png`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/game_of_thrones/24.jpg`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/game_of_thrones/25.png`"/>

      <Img class="topx" sticky :src="`${$dev ? '../../' :$https}projects/game_of_thrones/26.jpg`"/>

      <Img sticky :src="`${$dev ? '../../' :$https}projects/game_of_thrones/27.png`"/>

      <Img class="bottomx" sticky :src="`${$dev ? '../../' :$https}projects/game_of_thrones/28.jpg`"/>

      <Img  :src="`${$dev ? '../../' :$https}projects/game_of_thrones/29.jpg`"/>

      <Img class="topx" sticky :src="`${$dev ? '../../' :$https}projects/game_of_thrones/30.jpg`"/>

      <Img sticky :src="`${$dev ? '../../' :$https}projects/game_of_thrones/31.jpg`"/>

      <Img sticky :src="`${$dev ? '../../' :$https}projects/game_of_thrones/32.png`"/>

      <Img :src="`${$dev ? '../../' :$https}projects/game_of_thrones/33.jpg`"/>

      <div
        class="imagex centerx">
          <video frameborder="0" loop autoplay muted :src="`${$dev ? '../../' :$https}projects/game_of_thrones/34.mp4`" type="video/mp4"></video>
      </div>

      <Img sticky :src="`${$dev ? '../../' :$https}projects/game_of_thrones/35.png`"/>

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
    console.log(this.$dev)
    this.$setCssVar('--color', '255,255,255')
    this.$setCssVar('--bg', '15, 16, 18')
  },
}
</script>
