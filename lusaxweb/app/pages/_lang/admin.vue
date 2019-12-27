<template>
  <div class="admin">
    <div v-if="!admin" class="loginx">
      <img src="/lusaxweb-1.png" alt="">
      <input placeholder="Password" v-model="pass" type="password">
    </div>

    <ul v-if="admin" class="ul-messages">
      <li
        :class="{'destaca': ms.destaca, 'resp':ms.respondido}"
        :key="index"
        v-for="(ms, index) in messages">

        <i
          @click="destaca(ms, index)"
          class="material-icons destacado">
          whatshot
        </i>

        <div v-if="ms.date" class="datex">
          {{ ms.date }}
        </div>

        <h4>
          {{ ms.email }}
        </h4>
        <p>
          {{ ms.message }}
        </p>

        <ul v-if="ms.type" class="con-tags-type">
          <li v-if="ms.type.includes('design')">Design</li>
          <li v-if="ms.type.includes('frontend')">Frontend</li>
          <li v-if="ms.type.includes('backend')">Backend</li>
        </ul>

        <footer>
          <button
            :class="{'active': ms.leido}"
            @click="leido(ms,index)">
            <i class="material-icons">
              drafts
            </i>
            Leido
          </button>
          <button
            :disabled="ms.respondido"
            @click="responder(ms)">
            Responder <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20,4H6C4.897,4,4,4.897,4,6v4h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z"/><path d="M2 12H9V14H2zM4 16H10V18H4zM7 20H11V22H7z"/></svg>
          </button>
          <button
            :class="{'active': ms.respondido}"
            @click="respondido(ms,index)">
            <i class="material-icons">
              send
            </i>
            Respondido
          </button>
          <button
            @click="deletex(index)"
            class="eliminar">
            <i class="material-icons">
              clear
            </i>
            Eliminar
          </button>
        </footer>

      </li>

      <li class="nohay" v-if="!messages">
        No Hay Mensajes
      </li>
    </ul>

    <div class="con-btns" v-if="admin">
      <button
        class="guardarx2"
        @click="guardar">
        Guardar Cambios
      </button>
      <button
        class="guardarx2"
        @click="pass = ''">
        Cerrar cesión
      </button>

      <p
        v-if="guardado"
        class="p-guardado">
        Se guardaron los datos con exito <i class="material-icons">
cloud_done
</i>
      </p>

    </div>
  </div>
</template>
<script>
import firebase from 'firebase/app';
import 'firebase/database';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCdXXeXggwVJIVCt4V_ZLk8eqYgBTKSoA8",
    authDomain: "lusaxweb-next.firebaseapp.com",
    databaseURL: "https://lusaxweb-next.firebaseio.com",
    projectId: "lusaxweb-next",
    storageBucket: "lusaxweb-next.appspot.com",
    messagingSenderId: "802011514331"
  })
}

export default {
  layout:'adminx',
  head () {
    return {
      link: [
        { href: 'https://fonts.googleapis.com/css?family=Material+Icons', rel: 'stylesheet' },
      ]
    }
  },
  data:() => ({
    messages: {},
    guardado: false,
    admin: false,
    pass: '',
  }),
  mounted() {
    var starCountRef = firebase.database().ref('/messages');
    starCountRef.once('value', (snapshot) => {
      this.messages = snapshot.val()
    });
  },
  watch:{
    pass() {
      if(this.pass == 'summer') {
        this.admin = true
      } else {
        this.admin = false
      }
    }
  },
  methods:{
    responder(ms) {
      let href = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${ms.email}&su=Lusaxweb+contact+response&body=We+are+delighted+that+you+contact+us&bcc=lusaxweb@gmail.com&tf=1`
      window.open(href)
    },
    guardar() {
      console.log('guardo')
      firebase.database().ref('/messages').set({
        ...this.messages
      }, () => {
        this.guardado = true

        setTimeout(() => {
          this.guardado = false
        }, 3000)
      })
    },
    deletex(key) {
      // this.messages.splice(this.messages.indexOf(key), 1)
      // delete this.messages[key]
      this.$delete(this.messages, key)
    },
    destaca(item, key) {
      item.destaca = !item.destaca
    },
    leido(item, key) {
      item.leido = !item.leido
    },
    respondido(item, key) {
      item.respondido = !item.respondido
    }
  }
}
</script>
<style lang="stylus" scoped>
.datex
  font-weight bold
  font-size .75rem
  border 2px solid rgba(0,0,0, 1)
  padding 4px 8px
  background rgb(240,240,240)
  border-radius 10px
  position absolute
  top 0px
  left 10px
  transform translate(0,-10px)
.nohay
  text-align center
.con-btns
  display flex
  align-items center
  justify-content center
.loginx
  width 300px
  height 300px
  border 2px solid rgba(0,0,0, 1)
  display flex
  align-items center
  justify-content center
  flex-direction column
  img
    max-width 240px
  input
    padding 7px
    border 2px solid rgba(0,0,0, 1)
    margin-top 30px
    text-align center
    cursor text
    background transparent

footer
  padding 10px 0px
  border-top 2px solid rgba(0,0,0, .3)
  margin-top 10px
  display flex
.admin
  background transparent
  height 100vh
  display flex
  align-items center
  justify-content center
  width 100%
  background rgb(245,245,245)
  cursor default !important
  flex-direction column
  *
    cursor default !important
  .destacado
    position absolute
    top -10px
    right 10px
    background rgb(220,220,220)
    border-radius 10px
    padding 5px
    color rgba(0,0,0,.5)
    cursor pointer !important
    border 2px solid rgb(0,0,0)
    &:hover
      color rgba(0,0,0,1)

  button
    border 0px
    background rgba(230,230,230,.3)
    padding 7px 10px
    border-radius 5px
    transition all .2s ease
    cursor pointer !important
    display flex
    align-items center
    justify-content center
    margin 0px 5px
    color inherit
    svg
      max-width 20px
      margin-left 5px
    &:disabled
      opacity .5
    &.guardarx2
      padding 10px
      margin-top 20px
      position relative
      clear both
      border 2px solid rgb(0,0,0)
      font-weight bold
    &.active
      background #4FE86E !important
      color rgb(255,255,255)
    &.eliminar
      &:hover
        background #FF1D23 !important
        opacity 1 !important
        color rgb(255,255,255)

    i
      margin-right 5px
      font-size 1rem
    &:hover:not(.active)
      background rgb(0,0,0)
      color rgb(255,255,255)
      svg
        fill rgb(255,255,255)
  .ul-messages
    width 100%
    max-width 700px
    max-height calc(100% - 200px)
    overflow auto
    cursor default !important
    padding 0px 20px
    padding-bottom 20px
    &::-webkit-scrollbar
      width 7px
      background rgb(245,245,245)
      border 2px solid rgba(0,0,0, 1)
    &::-webkit-scrollbar-thumb
      width 5px
      background rgba(0,0,0, 1)
    >li
      background rgb(255,255,255)
      width 100%
      padding 15px
      border-radius 5px
      cursor default !important
      margin-top 20px
      position relative
      border 2px solid rgb(0,0,0)
      padding-top 30px
      &.resp
        color rgba(0,0,0,.4) !important
        border 2px solid rgba(0,0,0,.4)
        .destacado
          border 2px solid rgba(0,0,0,.4)

      &.destaca
        background #3158FF !important
        color rgb(255,255,255)
        .destacado
          color #3158FF !important
      p
        padding 20px
        padding-left 0px
      h3
        padding 5px
        cursor default !important
  .con-tags-type
    width 100%
    display flex
    align-items center
    justify-content flex-end
    cursor default !important
    li
      // background rgba(240,240,240,.3)
      border 2px solid rgba(0,0,0,.3)
      padding 5px 10px
      border-radius 5px
      margin 5px

.p-guardado
  padding 20px
  width 100%
  position absolute
  bottom 0px
  text-align center
  background #4FE86E
  color rgb(255,255,255)
  left 0px
  display flex
  align-items center
  justify-content center
  i
    margin-left 20px
</style>
