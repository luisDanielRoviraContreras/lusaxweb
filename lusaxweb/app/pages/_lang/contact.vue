<template>
  <section class="container-contact">
    <div
      :class="{'sending': sending}"
      class="con-inputs">
      <div class="con-input">
        <label for="email">Email</label>
        <input ref="email" @input="removeDanger('email')" v-model="sendData.email" id="email" placeholder="example@mail.com" type="mail">
        <p class="p-danger">{{ $t('contact.invalid') }}</p>
      </div>
      <div class="con-input">
        <label for="message">{{ $t('contact.message') }}</label>
        <textarea ref="message" @input="removeDanger('message')" v-model="sendData.message" id="message"></textarea>
      </div>

      <ul ref="ultype" class="ul-typex">
        <li
          :class="{'active': sendData.type.includes('design') }"
          @click="addType('design')">
          <span>
            {{ sendData.type.includes('design') ? '-' : '+'}}
          </span>

          UI UX <br> Design
        </li>
        <li
          :class="{'active':sendData.type.includes('frontend')}"
          @click="addType('frontend')">
          <span>
            {{ sendData.type.includes('frontend') ? '-' : '+'}}
          </span>
          Dev <br> Front end
        </li>
        <li
          :class="{'active': sendData.type.includes('backend')}"
          @click="addType('backend')">
          <span>
            {{ sendData.type.includes('backend') ? '-' : '+'}}
          </span>
          Dev <br> Back end
        </li>
      </ul>

      <p
        :class="{'success': success}"
        class="success-send">
        <span v-html="$t('contact.success')">
        </span>
      </p>

      <button
        @mouseenter="mouseenterSend"
        @mouseleave="mouseleaveSend"
        @click="send"

        class="sendx">
        {{ $t('contact.send') }}
      </button>


    </div>

    <footer class="copy">
      © 2019 · Lusaxweb All Right Reserved.
    </footer>

  </section>
</template>

<script>

import firebase from 'firebase/app';
import 'firebase/database';
import dateFormat from 'dateformat'

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
  data:() => ({
    sending: false,
    success: false,
    sendData:{
      email: '',
      message: '',
      type: [],
      destaca: false,
      leido: false,
      respondido: false
    }
  }),
  head:() => ({
    title: 'Lusaxweb / Contact Us',
  }),
  watch:{
    'sendData.email': function() {
      if(!this.validateEmail(this.sendData.email)) {
        if(this.sendData.email != '') {
          this.$refs.email.classList.add('danger')
          this.$refs.email.classList.add('danger-email')
        } else {
          this.$refs.email.classList.remove('danger-email')
        }
      } else {
        this.$refs.email.classList.remove('danger')
        this.$refs.email.classList.remove('danger-email')
      }
    },
    'sendData.type': function() {
      if(this.sendData.type.length != 0) {
        let items = this.$refs.ultype.querySelectorAll('li')

        items.forEach(item => {
          item.classList.remove('danger')
        })
      }
    }
  },
  mounted() {
    if(this.$store.state.invert) {
        this.$setCssVar('--bg', '255,255,255')
        this.$setCssVar('--color', '15, 15, 19')

        this.$store.state.bg = '255,255,255'
        this.$store.state.color = '15, 15, 19'
      } else {
        this.$setCssVar('--color', '255,255,255')
        this.$setCssVar('--bg', '15, 15, 19')

        this.$store.state.color = '255,255,255'
        this.$store.state.bg = '15, 15, 19'
    }
  },

  methods:{
    mouseleaveSend() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.remove('send')
    },
    mouseenterSend() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.add('send')
    },
    validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    removeDanger(ref) {
      this.$refs[ref].classList.remove('danger')
    },
    addType(type) {
      let types = this.sendData.type
      if(types.includes(type)) {
        types.splice(types.indexOf(type), 1)
      } else {
        types.push(type)
      }
    },
    send() {
      let ifs = [
        this.sendData.email == '',
        this.sendData.message == '',
        this.sendData.type.length == 0,
        !this.validateEmail(this.sendData.email)
      ]

      if(ifs[0] || ifs[1] || ifs[3]) {

        if(ifs[0] || ifs[3]) {
          this.$refs.email.classList.add('danger')
          if(ifs[3]) {
            this.$refs.email.classList.add('danger-email')
          }
        }
        if(ifs[1]) {
          this.$refs.message.classList.add('danger')
        }
        return
      }

      this.sending = true
      var now = new Date();

      firebase.database().ref('/messages').push({
        ...this.sendData,
        date: dateFormat(now, "dddd - m/d/yy - h:MM:ss TT ")
      }, () => {
        this.sendData.email = ''
        this.sendData.message = ''
        this.sendData.type = []

        setTimeout(() => {

          this.success = true
          setTimeout(() => {
            this.success = false
            this.sending = false
          },1500)

        }, 2000)
      })

    },
    setCssVariable(propertyName, value) {
      document.documentElement.style.setProperty(propertyName, value);
    },
  }
}
</script>

<style lang="stylus" scoped>
@import('../../../style/mixin')

.copy
  color getColor('color', .15)
  position absolute
  bottom 0px
  font-size .6rem
  padding 20px
  font-family poppins

.success-send
  color getColor('color', 1)
  font-size .8rem
  position absolute
  text-align center
  background getColor('bg', 1)
  visibility hidden
  opacity 0
  overflow hidden
  max-width 300px
  transition all .5s ease
  &.success
    opacity 1 !important
    visibility visible !important
    ~ button
      border-color #23E887 !important
      animation-play-state: paused !important
    span
      transform translate(0) !important
  span
    display block
    transition all .3s ease
    transform translate(0,130%)
    b
      color #23E887
      font-weight normal
      letter-spacing 1px
      font-style italic

.container-contact
  position fixed
  width 100vw
  height 100vh
  background getColor('bg', 1)
  display flex
  align-items center
  justify-content center
  .sendx
    width 100%
    padding 12px
    background transparent
    border 2px solid getColor('color', 1)
    margin-top 30px
    color getColor('color', 1)
    transition all .15s ease
    font-family poppins
    overflow hidden
    &:hover
      background getColor('color', 1)
      color getColor('bg', 0)
      box-shadow 0px 0px 20px 0px getColor('color', .2)
  .ul-typex
    width 100%
    position relative
    display flex
    align-items center
    justify-content center
    margin-top 30px
    clear both
    li
      color getColor('color', 1)
      width calc(33% - 5px)
      height 100px
      display flex
      align-items flex-end
      padding 15px
      justify-content flex-start
      border 1px solid getColor('color', .08)
      font-size .7rem
      transition all .1s ease
      font-family poppins
      position relative
      span
        font-family poppins
        position absolute
        top 5px
        right 5px
        width 20px
        height 20px
        display flex
        align-items center
        justify-content center
        font-size .8rem
      &.danger
        border 1px dashed rgb(120,10,40)
      &.active
        font-weight bold
        background getColor('color', 1) !important
        color getColor('bg', 1) !important
        box-shadow 0px 0px 15px 0px getColor('color', .2)
      &:active
        transform scale(.95)
      &:hover
        background getColor('color', .08)
        border 1px solid getColor('color', .0)
      &:last-child
        margin-left 10px
      &:first-child
        margin-right 10px
  .con-inputs
    width 100%
    padding 30px
    max-width 380px
    // transition all .3s ease
    position relative
    display flex
    align-items center
    justify-content center
    flex-direction column
    &.sending
      .sendx
        // transform translate(0, -200px)
        padding 0px
        height 1px
        border 0px
        border-top 1px solid getColor('color', 1)
        animation sending 1s ease infinite
        // left 50%
        // position absolute
        // top 50%
        // transform translate(-50%, -50%)
      .con-input
        opacity 0
        transform translate(0, -50px)
      ul
        transform translate(0, -50px)
        opacity 0
    .con-input
      width 100%
      display flex
      align-items center
      flex-direction column
      margin 20px 0px
      label
        text-align left
        color getColor('color', 1)
        width 100%
        display block
        font-size .8rem
        padding-left 20px
        position relative
        font-family poppins
        &:after
          content ''
          position absolute
          left -4px
          top 9px
          width 14px
          height 1px
          background getColor('color', 1)
      input, textarea
        width 100%
        border 0px
        background transparent
        border-bottom 1px solid getColor('color', .08)
        color getColor('color', 1)
        padding 10px
        padding-left 20px
        transition all .2s ease
        font-family poppins
        font-size .75rem
        &::-webkit-input-placeholder
          color rgba(255,255,255,.1)
          letter-spacing 1px
        + .p-danger
          color rgba(255,255,255,1)
          width 100%
          text-align left
          padding 5px
          font-size .65rem
          opacity 0
        &.danger-email
          + .p-danger
            opacity 1
        &.danger
          border-bottom 1px dashed rgba(255,255,255,1)
        &:focus
          border-bottom 1px solid getColor('color', 1)
      textarea
        min-height 100px
        resize none


@keyframes sending
  0%
    width 100%
    height 1px
  50%
    width 0%
  100%
    width 100%
    height 1px

@media screen and (max-width: 768px)
  .copy
    position relative
    text-align center
  .container-contact
    display block
    padding-top 60px
    overflow auto
    .con-inputs
      margin auto
    ~ >>> .nav-down
      display none !important
    .sendx
      &:hover
        background getColor('color', 1)
        color getColor('bg', 1)
        box-shadow 0px 0px 20px 0px getColor('color', .2)

@media screen and (max-width: 500px)
  .container-contact
    .con-inputs
      .sendx
        margin-top 15px
        padding 8px
      .p-danger
        font-size .6rem !important

      .con-input
        margin 5px 0px !important
        input, textarea
          font-size .6rem
    .ul-typex
      display block
      margin-top 0px
      li
        font-size .6rem
        padding 10px
        width 100%
        margin-left 0px !important
        margin-top 10px
        height auto
        text-align center
        display block
        span
          top 7px
        br
          display none
@media screen and (max-width: 768px) and (orientation: landscape)
  .container-contact
    display block
    overflow auto
    padding 30px 20px
  .con-inputs
    margin auto
@media screen and (max-width: 812px) and (max-height: 500px) and (orientation: landscape)
  .container-contact
    display block
    overflow auto
    padding 30px 20px
  .con-inputs
    margin auto
  .copy
    position relative
    text-align center
</style>
