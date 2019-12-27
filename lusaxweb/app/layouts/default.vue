<template>
  <div>
    <div ref="effectcolor" class="con-effect-color" />
    <div
      ref="mouse"
      class="mouse">

      <span class="icon-hover open-project-span">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z"/><path d="M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z"/></svg>
      </span>

      <span ref="icongithub" class="icon-hover iconx-github">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465	c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338	c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028	c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93	c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021	c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021	c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922	c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479	C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"/></svg>
        </span>

        <span ref="icontwitter" class="icon-hover iconx-twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"/></svg>
        </span>

        <span ref="iconstack" class="icon-hover iconx-stackoverflow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.24,19.399v-4.804h1.6v6.405H4.381v-6.405h1.598v4.804H17.24z M7.582,17.8h8.055v-1.604H7.582V17.8L7.582,17.8z M7.777,14.16l7.859,1.641l0.34-1.552l-7.861-1.642L7.777,14.16L7.777,14.16z M8.795,10.366l7.281,3.398l0.678-1.463L9.473,8.902	l-0.678,1.454V10.366L8.795,10.366z M10.832,6.777l6.166,5.142l1.018-1.216l-6.162-5.14l-1.016,1.213L10.832,6.777L10.832,6.777z M14.814,2.999l-1.311,0.969l4.803,6.454l1.313-0.971l-4.807-6.452H14.814z"/></svg>
        </span>

        <span ref="iconlinkedin" class="icon-hover iconx-linkedin">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188"/><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zM3.095 8.855H6.87V20.994H3.095z"/></svg>
        </span>

        <span ref="iconmedium" class="icon-hover iconx-medium">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.285,7.269c0.023-0.232-0.065-0.463-0.24-0.619l-1.77-2.133V4.197h5.498l4.25,9.32l3.736-9.32H21v0.319	l-1.515,1.451c-0.13,0.1-0.193,0.264-0.168,0.425v10.666c-0.025,0.162,0.038,0.325,0.168,0.425l1.479,1.451v0.319h-7.436v-0.319	l1.529-1.487c0.152-0.15,0.152-0.195,0.152-0.424V8.401l-4.259,10.817h-0.575L5.417,8.401v7.249	c-0.041,0.305,0.06,0.612,0.275,0.833l1.992,2.417v0.319H2.036v-0.319l1.992-2.417c0.212-0.221,0.308-0.53,0.257-0.833V7.269z"/></svg>
        </span>

        <span ref="iconvimeo" class="icon-hover iconx-vimeo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.062,10.414c-2.036,4.349-6.949,10.267-10.054,10.267c-3.06,0-3.501-6.527-5.173-10.869	C5.012,7.674,4.481,8.166,2.939,9.245L2,8.031c2.248-1.976,4.499-4.272,5.88-4.399c1.559-0.148,2.517,0.916,2.873,3.193	c0.475,2.994,1.137,7.641,2.291,7.641c0.9,0,3.117-3.686,3.232-5.004c0.203-1.93-1.421-1.989-2.828-1.387	C15.676,0.78,24.942,2.125,21.062,10.414z"/></svg>
        </span>

        <span ref="iconbehance" class="icon-hover iconx-behance">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.387.28.871.28 1.443 0 .62-.14 1.138-.421 1.551-.283.414-.7.753-1.256 1.015.757.219 1.318.602 1.69 1.146.374.549.557 1.206.557 1.976 0 .625-.119 1.162-.358 1.613-.24.458-.569.829-.974 1.114-.408.289-.876.501-1.399.64-.519.137-1.057.206-1.609.206H2V5.731H7.803zM7.452 10.703c.48 0 .878-.114 1.192-.345.312-.228.463-.604.463-1.119 0-.286-.051-.522-.151-.707C8.853 8.349 8.714 8.205 8.539 8.104 8.365 7.999 8.17 7.928 7.942 7.889 7.719 7.845 7.485 7.828 7.245 7.828H4.71v2.875H7.452zM7.603 15.942c.267 0 .521-.023.76-.077C8.604 15.813 8.818 15.729 9 15.604c.182-.12.332-.283.44-.491.109-.206.162-.475.162-.798 0-.634-.179-1.085-.533-1.358-.355-.27-.831-.404-1.414-.404H4.71v3.39H7.603zM16.168 15.901c.367.358.896.538 1.584.538.493 0 .919-.125 1.278-.373.354-.249.57-.515.653-.79h2.155c-.346 1.072-.871 1.838-1.589 2.299-.709.463-1.572.693-2.58.693-.702 0-1.334-.113-1.9-.337-.567-.227-1.042-.544-1.439-.958-.389-.416-.69-.907-.905-1.485-.213-.574-.32-1.21-.32-1.899 0-.666.111-1.289.329-1.864.223-.577.529-1.075.934-1.493.405-.42.885-.751 1.444-.994.559-.241 1.175-.362 1.858-.362.754 0 1.413.146 1.979.44.563.292 1.026.687 1.39 1.182.363.493.622 1.058.783 1.691.161.632.217 1.292.171 1.983h-6.431C15.563 14.876 15.8 15.543 16.168 15.901zM18.98 11.22c-.291-.322-.783-.496-1.385-.496-.391 0-.714.065-.974.199-.254.133-.461.297-.62.491-.157.197-.265.405-.328.628-.062.217-.1.413-.111.587h3.982C19.486 12.005 19.272 11.544 18.98 11.22zM15.062 6.557H20.051V7.772H15.062z"/></svg>
        </span>
        <span ref="icondribbble" class="icon-hover iconx-dribbble">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.66,6.98c-0.894-1.533-2.107-2.747-3.641-3.64C15.486,2.447,13.813,2,12,2S8.514,2.447,6.98,3.34	C5.447,4.233,4.233,5.447,3.34,6.98S2,10.187,2,12s0.446,3.487,1.34,5.02c0.894,1.534,2.107,2.747,3.641,3.64	C8.514,21.553,10.187,22,12,22s3.486-0.447,5.02-1.34c1.533-0.893,2.747-2.106,3.641-3.64C21.554,15.487,22,13.813,22,12	S21.554,8.513,20.66,6.98z M12,3.66c2,0,3.772,0.64,5.32,1.919c-0.92,1.174-2.286,2.14-4.1,2.9c-1.002-1.813-2.088-3.327-3.261-4.54	C10.641,3.753,11.319,3.66,12,3.66z M5.51,6.8c0.754-0.947,1.656-1.686,2.711-2.22c1.212,1.201,2.325,2.7,3.34,4.5	c-2,0.6-4.114,0.9-6.341,0.9c-0.573,0-1.006-0.013-1.3-0.04C4.227,8.793,4.757,7.747,5.51,6.8z M3.66,12	c0-0.054,0.003-0.12,0.01-0.2c0.007-0.08,0.01-0.146,0.01-0.2c0.254,0.014,0.641,0.02,1.161,0.02c2.666,0,5.146-0.367,7.439-1.1	c0.187,0.373,0.381,0.793,0.58,1.26c-1.32,0.293-2.674,1.006-4.061,2.14S6.4,16.247,5.76,17.5C4.36,15.913,3.66,14.08,3.66,12z M12,20.34c-1.894,0-3.594-0.587-5.101-1.759C7.5,17.394,8.423,16.259,9.67,15.18c1.246-1.08,2.483-1.753,3.71-2.02	c0.772,2.133,1.293,4.339,1.56,6.62C13.966,20.153,12.986,20.34,12,20.34z M19.08,16.38c-0.666,1.066-1.526,1.94-2.58,2.621	c-0.24-2.08-0.7-4.107-1.379-6.081c0.932-0.066,1.765-0.1,2.5-0.1c0.799,0,1.686,0.034,2.659,0.1	C20.146,14.16,19.746,15.313,19.08,16.38z M17.84,11.38c-1.16,0-2.233,0.047-3.22,0.14c-0.254-0.653-0.48-1.193-0.68-1.62	c2.066-0.906,3.532-2.006,4.399-3.3c1.2,1.414,1.854,3.027,1.96,4.84C19.487,11.4,18.667,11.38,17.84,11.38z"/></svg>
        </span>
        <span ref="iconinstagram" class="icon-hover iconx-instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.999,7.377c-2.554,0-4.623,2.07-4.623,4.623c0,2.554,2.069,4.624,4.623,4.624c2.552,0,4.623-2.07,4.623-4.624	C16.622,9.447,14.551,7.377,11.999,7.377L11.999,7.377z M11.999,15.004c-1.659,0-3.004-1.345-3.004-3.003	c0-1.659,1.345-3.003,3.004-3.003s3.002,1.344,3.002,3.003C15.001,13.659,13.658,15.004,11.999,15.004L11.999,15.004z"/><circle cx="16.806" cy="7.207" r="1.078"/><path d="M20.533,6.111c-0.469-1.209-1.424-2.165-2.633-2.632c-0.699-0.263-1.438-0.404-2.186-0.42	c-0.963-0.042-1.268-0.054-3.71-0.054s-2.755,0-3.71,0.054C7.548,3.074,6.809,3.215,6.11,3.479C4.9,3.946,3.945,4.902,3.477,6.111	c-0.263,0.7-0.404,1.438-0.419,2.186c-0.043,0.962-0.056,1.267-0.056,3.71c0,2.442,0,2.753,0.056,3.71	c0.015,0.748,0.156,1.486,0.419,2.187c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45	c0.963,0.042,1.268,0.055,3.71,0.055s2.755,0,3.71-0.055c0.747-0.015,1.486-0.157,2.186-0.419c1.209-0.469,2.164-1.424,2.633-2.633	c0.263-0.7,0.404-1.438,0.419-2.186c0.043-0.962,0.056-1.267,0.056-3.71s0-2.753-0.056-3.71C20.941,7.57,20.801,6.819,20.533,6.111z M19.315,15.643c-0.007,0.576-0.111,1.147-0.311,1.688c-0.305,0.787-0.926,1.409-1.712,1.711c-0.535,0.199-1.099,0.303-1.67,0.311	c-0.95,0.044-1.218,0.055-3.654,0.055c-2.438,0-2.687,0-3.655-0.055c-0.569-0.007-1.135-0.112-1.669-0.311	c-0.789-0.301-1.414-0.923-1.719-1.711c-0.196-0.534-0.302-1.099-0.311-1.669c-0.043-0.95-0.053-1.218-0.053-3.654	c0-2.437,0-2.686,0.053-3.655c0.007-0.576,0.111-1.146,0.311-1.687c0.305-0.789,0.93-1.41,1.719-1.712	c0.534-0.198,1.1-0.303,1.669-0.311c0.951-0.043,1.218-0.055,3.655-0.055c2.437,0,2.687,0,3.654,0.055	c0.571,0.007,1.135,0.112,1.67,0.311c0.786,0.303,1.407,0.925,1.712,1.712c0.196,0.534,0.302,1.099,0.311,1.669	c0.043,0.951,0.054,1.218,0.054,3.655c0,2.436,0,2.698-0.043,3.654H19.315z"/></svg>
        </span>

        <span ref="iconcodepen" class="icon-hover iconx-codepen">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.838,8.445C21.838,8.444,21.837,8.444,21.838,8.445c-0.002-0.001-0.002-0.002-0.003-0.004l0,0	c-0.001,0-0.001-0.001-0.001-0.001c0-0.001,0-0.001,0-0.001c-0.063-0.093-0.145-0.171-0.235-0.228l-9.164-6.08	c-0.255-0.175-0.644-0.175-0.898,0L2.371,8.214C2.278,8.271,2.196,8.351,2.133,8.445C2.04,8.585,1.997,8.742,2,8.897v6.16	c-0.003,0.153,0.04,0.309,0.131,0.448c0,0,0,0,0,0.001c0.001,0.001,0.001,0.001,0.002,0.002l0,0c0.003,0.006,0.007,0.01,0.01,0.015	v0.002c0.001,0,0.001,0,0.001,0c0.001,0,0.001,0,0.001,0.001c0.001,0,0.001,0.001,0.001,0.001c0.063,0.088,0.14,0.16,0.226,0.215	l9.165,6.082c0.128,0.088,0.282,0.139,0.448,0.139c0.169,0,0.323-0.051,0.45-0.139l9.165-6.082c0.091-0.058,0.172-0.134,0.235-0.229	c0.094-0.141,0.139-0.3,0.136-0.456v-6.16C21.974,8.742,21.93,8.585,21.838,8.445z M12.781,4.273l6.953,4.613l-3.183,2.112	l-3.771-2.536V4.273z M11.189,4.273v4.189l-3.771,2.536L4.237,8.887L11.189,4.273z M3.594,10.371l2.395,1.59l-2.395,1.611V10.371z M11.189,19.682l-6.96-4.617l3.195-2.15l3.765,2.498V19.682z M11.984,14.029l-3.128-2.078l3.128-2.105l3.131,2.105L11.984,14.029z M12.781,19.682v-4.27l3.766-2.498l3.193,2.15L12.781,19.682z M20.378,13.572l-2.396-1.611l2.396-1.59V13.572z"/></svg>
        </span>


      <i class="upx flaticon-up-arrow">
      </i>

      <i class="backmouse flaticon-return">
      </i>

      <i class="flaticon-eye viewx">
      </i>

      <i class="mouse-scroll--x flaticon-back">
      </i>

      <i class="mouse-scroll--x2 flaticon-next">
      </i>


      <i class="icon-hover flaticon-behance">
      </i>

      <i class="icon-hover flaticon-instagram">
      </i>

      <i class="icon-hover flaticon-github">
      </i>

      <i class="icon-hover flaticon-dribbble">
      </i>

      <i class="icon-hover flaticon-email sendx">
      </i>

      <i class="icon-hover flaticon-more pointsx"></i>

      <i class="icon-hover flaticon-close point-x"></i>

      <i class="icon-hover flaticon-next-1 nextx"></i>

    </div>
    <div
      ref="mouse2"
      class="mouse2">

      <span class="icon-hover prox-mouse">
        Comming <br> Soon
      </span>

    </div>
      <div ref="lineamouse1" class="lineaMouse1"/>
      <div ref="lineamouse2" class="lineaMouse2"/>
      <div ref="lineamouse3" class="lineaMouse3"/>
      <div ref="lineamouse4" class="lineaMouse4"/>

    <Nav />

    <nuxt :class="{'points-active-app': $store.state.activePoints}"/>

    <points v-if="pointsActive" />
    <div @click="$store.state.activePoints = false" class="effect" :class="{'points-active': $store.state.activePoints}" />
    <!-- <div class="effect2" />
    <div class="effect3" /> -->

    <Nav-down />
  </div>
</template>
<script>
import Nav from '@/components/Nav'
import NavDown from '@/components/NavDown'
import points from '@/components/conPoints'
export default {
  components:{
    Nav,
    NavDown,
    points
  },
  data:() => ({
    pointsActive: false,
    active: false,
    hidden: false
  }),
  mounted() {
    if(this.mobileAndTabletcheck) {
      this.chamgeMouse()
      window.addEventListener("load", this.load);
      document.addEventListener('mouseleave', this.mouseHidden)
      document.addEventListener('mouseenter', this.mouseVisible)
    }
  },

  watch:{
    '$route' (to, from) {
      if (
        to.path !== from.path
      ) {
        let mouse = document.querySelector('.mouse')
        if(mouse) {
          mouse.setAttribute('class', 'mouse')
        }

        let scrolling = document.querySelector('.scrolling')
        if(scrolling) {
          scrolling.classList.remove('active')
        }

      }
    },
    '$store.state.activePoints': function() {
      document.querySelector('.effect').style.top = `${document.querySelector('.con-menu-more').getBoundingClientRect().top + 18}px`
      document.querySelector('.effect').style.left = `calc(100% - ${document.querySelector('.con-menu-more').getBoundingClientRect().top + 18}px)`
    }
  },
  methods:{
    mobileAndTabletcheck() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    },
    mouseHidden() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.add('hiddenx')
    },
    mouseVisible() {
      let mouse = document.querySelector('.mouse')
      mouse.classList.remove('hiddenx')
    },
    setCssVariable(propertyName, value) {
      document.documentElement.style.setProperty(propertyName, value);
    },
    load() {
      setTimeout(() => {
        this.$nuxt.$loading.finish()
      }, 1000);
    },
    chamgeMouse() {
      window.addEventListener('mousemove', this.mymouse)
      window.addEventListener('mousedown', this.mousedownx)
      window.addEventListener('mouseup', this.mouseupx)
      window.addEventListener('mouseleave', this.mouseleavex)
    },
    mymouse(evt) {
      let cords = evt
      let x = cords.x
      let y = cords.y

      let mouse = this.$refs.mouse

      mouse.style.left = `${x}px`
      mouse.style.top = `${y}px`

      let mouse2 = this.$refs.mouse2
      setTimeout(() => {
        mouse2.style.left = `${x}px`
        mouse2.style.top = `${y}px`
      }, 50);

      let lineamouse1 = this.$refs.lineamouse1
      lineamouse1.style.left = `${x}px`
      lineamouse1.style.top = `${y}px`

      let lineamouse2 = this.$refs.lineamouse2
      lineamouse2.style.left = `${x}px`
      lineamouse2.style.top = `${y}px`

      let lineamouse3 = this.$refs.lineamouse3
      lineamouse3.style.left = `${x}px`
      lineamouse3.style.top = `${y}px`

      let lineamouse4 = this.$refs.lineamouse4
      lineamouse4.style.left = `${x}px`
      lineamouse4.style.top = `${y}px`
    },
    mousedownx(evt) {
      let mouse = this.$refs.mouse
      let mouse2 = this.$refs.mouse2

      mouse.classList.add('active')
      mouse2.classList.add('active')
    },
    mouseupx(evt) {
      this.active = false
      let mouse = this.$refs.mouse
      let mouse2 = this.$refs.mouse2

      mouse.classList.remove('active')
      mouse2.classList.remove('active')
    },
    mouseleavex() {
      this.hidden = true
    }
  }
}
</script>
<style lang="stylus">
@import('../../style/mixin')


@font-face {
    font-family: Monument;
    src: url("/fonts/Monument.otf") format("opentype");
}
@font-face {
    font-family: Poppins;
    src: url("/fonts/Poppins-Regular.ttf") format("opentype");
}


.con-effect-color
  position absolute
  left 100%
  border-radius 50%
  top 100%
  width 0px
  height 0px
  background rgb(255,255,255)
  mix-blend-mode: exclusion;
  z-index 60000
  transform translate(-50%, -50%)
  pointer-events none
  transition all .4s ease-out,opacity .3s ease, top 0s, left 0s


.container
  transition all .3s ease-out
.points-active
  // opacity 0

.mouse2
  // width 4px
  // height 4px
  width 28px
  height 28px
  // background getColor('color')
  border 1px solid getColor('color', 1)
  position fixed
  border-radius 50%
  pointer-events none
  z-index 6000
  transform translate(-50%, -50%)
  // transition width .2s ease, height .2s ease, box-shadow .2s ease
  transition width .3s ease, height .3s ease
  box-shadow 0px 0px 2px 0px getColor('bg', 1)

.prox-mouse
  transform scale(0)
  transition all .2s ease
  position relative
  font-size 10px !important
  text-align center
  color getColor('bg', 1)
  font-weight bold

.mouse
  width 4px
  height 4px
  background getColor('color', 1)
  position fixed
  border-radius 50%
  // border 1px solid getColor('color', 1)
  pointer-events none
  z-index 6000
  transform translate(-50%, -50%)
  transition width .3s ease, height .3s ease, box-shadow .2s ease, transform .2s ease, background .3s ease, radius .3s ease , border .3s ease, opacity .25s ease
  // transition all .1s ease-out
  box-shadow 0px 0px 5px 0px getColor('bg', .4)
  display flex
  align-items center
  justify-content center
  // mix-blend-mode: exclusion;
  &.open-project
    border 1px solid rgba(0,0,0,0)
    background transparent
    .open-project-span
      opacity 1 !important
      visibility visible !important
      transform scale(1) !important
    + .mouse2
      border-radius 50%
      width 30px
      height 30px
      background rgb(255,255,255)
      mix-blend-mode: exclusion;
      border 1px solid rgba(0,0,0,0)
  &.prox
    width 90px !important
    height 90px !important
    // border-radius 10px !important
    border 0px !important
    // mix-blend-mode: color;
    background getColor('bg', 1)

    .mouse-scroll--x2
      opacity 0 !important
      left 0px !important
    .mouse-scroll--x
      opacity 0 !important
      right 0px !important
    +
      .mouse2
        width 100px !important
        height 100px !important
        // border-radius 10px !important
        border 0px !important
        display flex
        align-items center
        justify-content center
        // mix-blend-mode: exclusion;
        .prox-mouse
          opacity 1
          visibility visible
          transform scale(1)


  &.invert
    background transparent
    border 1px solid transparent !important
    +
      .mouse2
        border 1px solid transparent !important
    i
      color getColor('bg') !important
  &.hiddennext
    background transparent
    mix-blend-mode: exclusion;
    display none !important
    + .mouse2
      opacity 0
      display none !important

  &.hiddenx
    opacity 0
    transform scale(.5)
    + .mouse2
      opacity 0
  &.hover--logox
    border-radius 50%
    width 40px
    height 40px
    background rgb(255,255,255)
    mix-blend-mode: exclusion;
    box-shadow none !important
    border 0px solid getColor('bg', 0) !important
    + .mouse2
      opacity 0
  &.menu--hover-all
    border-radius 50%
    background rgb(255,255,255)
    mix-blend-mode: exclusion;
    box-shadow none !important
    border 0px solid getColor('bg', 0) !important
    + .mouse2
      border 2px solid getColor('bg', 1) !important
  &.menu--hover
    border-radius 50%
    width 55px
    height 55px
    background rgb(255,255,255)
    mix-blend-mode: exclusion;
    box-shadow none !important
    border 0px solid getColor('bg', 0) !important
    + .mouse2
      opacity 0
  &.hover--logo
    border 1px solid getColor('color', 0)
    box-shadow none
    + .mouse2
      border-radius 50%
      width 45px
      height 45px
      background rgb(255,255,255)
      mix-blend-mode: exclusion;
      box-shadow none !important
  &.hover--li
    border-radius 50%
    width 25px
    height 25px
    background rgb(255,255,255)
    mix-blend-mode: exclusion;
    box-shadow none !important
    + .mouse2
      opacity 0
  &.hover-footer-img
    border-radius 50%
    width 35px
    height 35px
    background rgb(255,255,255)
    box-shadow none !important
    mix-blend-mode: exclusion;
    + .mouse2
      width 45px
      height 45px
      opacity 1
      border-radius 50%
      border 0px !important
      box-shadow none
      background rgb(255,255,255)
      mix-blend-mode: exclusion;
    i.nextx
      opacity 1
      transform scale(1)
      visibility visible
      display flex
      align-items center
      justify-content center
      &:before
        font-size .78rem !important
  &.lang-m
    border-radius 50%
    width 25px
    height 25px
    background rgb(255,255,255)
    mix-blend-mode: exclusion;
    box-shadow none !important
    // border 1px solid getColor('color', 0)
    // box-shadow none
    + .mouse2
      opacity 0
  &.hover--img
    border 1px solid getColor('color', 0)
    box-shadow none
    border-radius 50%
    width 25px
    height 25px
    background getColor('color')
    mix-blend-mode: exclusion;
    box-shadow none !important
    + .mouse2
      border 3px solid getColor('color', 1)
      box-shadow none
      border-radius 50%
      width 15px
      height 15px
      background transparent
      mix-blend-mode: exclusion;
      box-shadow none !important
  &.hover--point
    width 30px
    height 30px
    border 1px solid getColor('color', 0)
    background getColor('color', 1)
    border-radius 50%
    box-shadow 0px 0px 5px 0px getColor('bg', 0)
    mix-blend-mode: exclusion;
    box-shadow none !important
    + .mouse2
      border-radius 50%
      width 4px
      height 4px
      background getColor('bg', 1)
  &.points
    border 1px solid getColor('color', 0)
    box-shadow 0px 0px 5px 0px getColor('bg', 0)
    background transparent
    .pointsx
      opacity 1
      visibility visible
      transform scale(1)
    + .mouse2
      box-shadow none
      border-radius 50%
      width 45px
      height 45px
      background transparent
      mix-blend-mode: exclusion;
      box-shadow none !important
      background rgb(255,255,255)
  &.points-x
    border 0px solid getColor('color', 0)
    box-shadow 0px 0px 5px 0px getColor('bg', 0)
    mix-blend-mode: normal;
    .point-x
      color getColor('bg', 1)
      opacity 1
      visibility visible
      transform scale(1)
      font-weight bold
    + .mouse2
      box-shadow none
      border-radius 50%
      width 45px
      height 45px
      background transparent
      mix-blend-mode: exclusion;
      box-shadow none !important
      background rgb(255,255,255)

  &.send
    border 1px solid getColor('color', 0)
    box-shadow 0px 0px 5px 0px getColor('bg', 0)
    + .mouse2
      opacity 0 !important
    .sendx
      opacity 1
      visibility visible
      transform scale(1)
      color getColor('bg', 1)
      font-size 1.2rem

  &.plus
    border 1px solid getColor('color', 0)
    box-shadow none
    + .mouse2
      border-radius 50%
      width 25px
      height 25px
      background getColor('bg')
      mix-blend-mode: exclusion;
      box-shadow none !important
    // .plusx
    //   text-shadow 0px 0px 4px getColor('bg', .3)
    //   opacity 1
    //   visibility visible
    //   transform scale(1)
    //   font-size 1rem
  &.hoverx
    border-radius 50%
    width 25px
    height 25px
    background transparent
    background rgb(255,255,255)
    mix-blend-mode: exclusion;
    box-shadow none !important
    &.active
      width 50px !important
      height 50px !important
      opacity 1
      .plusx
        opacity 0
        transform scale(0)
    // .plusx
    //   text-shadow 0px 0px 4px getColor('bg', .3)
    //   opacity 1
    //   visibility visible
    //   transform scale(1)
    //   font-size 1rem
    + .mouse2
      opacity 0
    .mouse-scroll--x2
      opacity 0 !important
      left 0px !important
    .mouse-scroll--x
      opacity 0 !important
      right 0px !important
  &.scroll--x

    .mouse-scroll--x2
      opacity 1
      visibility visible
      right -26px
    .mouse-scroll--x
      left -26px
      opacity 1
      visibility visible
  &.back
    border 1px solid getColor('color', 0)
    box-shadow none
    background transparent
    + .mouse2
      opacity 0
    i.backmouse
      opacity 1
      transform scale(1)
      visibility visible

  &.next
    border 1px solid getColor('color', 0)
    box-shadow none
    background transparent
    + .mouse2
      width 45px
      height 45px
      opacity .1
      border-radius 50%
      border 0px !important
      box-shadow none
    i.nextx
      opacity 1
      transform scale(1)
      visibility visible
  i.backmouse
    opacity 0
    color getColor('color', 1)
    font-weight normal
    font-size .9rem
    transition all .3s ease
    transform scale(0)
    position absolute
    visibility hidden
  i.upx
    visibility hidden
    opacity 0
    color getColor('color', 1)
    font-weight normal
    font-size .8rem
    transition all .3s ease
    transform scale(0)
    position absolute
  i.viewx
    visibility hidden
    opacity 0
    color getColor('color', 1)
    font-weight normal
    font-size .9rem
    transition all .3s ease
    transform scale(0)
    position absolute
  &.view
    border 1px solid getColor('color', 0)

    + .mouse2

      opacity 0

    i.viewx
      opacity 1
      transform scale(1)
      visibility visible
  &.up
    border 1px solid getColor('color', 0)
    background transparent
    i.upx
      opacity 1
      transform scale(1)
      visibility visible
    + .mouse2
      opacity 0 !important
  &.scrollx
    width 20px !important
    height 30px !important
    border-radius 8px
    border 2px solid getColor('color', 1)
    &:after
      content ''
      animation scrollx 2s ease-out infinite
      width 2px
      height 5px
      background getColor('color', 1)
      position absolute
      left 7px
      top 5px
      border-radius 8px
      display block
    + .mouse2
      display none
  // &.hoverx
  //   + .mouse2
  //     transition all 0s ease
  &.hidden
    opacity 0
  &.active:not(.prox)
    + .mouse2
      background getColor('color')
      transform translate(-50%, -50%)
      width 1px !important
      height 1px !important
    &:after
      display none
    ~ .lineaMouse3, ~ .lineaMouse4
       opacity 1
    ~ .lineaMouse1
      height 0px
      background getColor('color', .5)
    ~ .lineaMouse2
      width 0px
      background getColor('color', .5)

@keyframes scrollx
  0%
    transform translate(0)
    opacity 0
  20%
    transform translate(0)
    opacity 1
  50%
    transform translate(0, 6px)
    opacity 1
  80%
    transform translate(0, 6px)
    opacity 1
  100%
    transform translate(0, 6px)
    opacity 0


.lineaMouse1
  width 1px
  height 100vh
  background getColor('color', .0)
  position fixed
  pointer-events none
  transition height .2s ease, background .4s ease
  z-index 6000

.lineaMouse2
  width 100vw
  height 1px
  background getColor('color', .0)
  position fixed
  pointer-events none
  transition width .2s ease, background .4s ease
  z-index 6000

.lineaMouse3
  width 1px
  height 100vh
  background getColor('color', .0)
  position fixed
  pointer-events none
  opacity 0
  z-index 6000

.lineaMouse4
  width 100vw
  height 1px
  background getColor('color', .0)
  position fixed
  pointer-events none
  opacity 0
  z-index 6000

html {
  font-family: 'Raleway' ,'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.Monument
  font-family: Monument !important

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

p
  font-family: poppins

// h1,h2,h3, h4
//   font-family: 'Poppins', sans-serif;

.effect
  position fixed
  top 45px
  left calc(100% - 50px)
  // background getColor('color', 1)
  background rgb(240,240,240)
  width 10px
  height 10px
  z-index 4000
  transition all .5s ease .2s
  border-radius 50%
  transform translate(-50%, -50%)
  visibility hidden
  pointer-events none
  mix-blend-mode: exclusion
  &.points-active
    visibility visible
    transition all .5s ease
    width 300vw
    height 300vw






@media screen and (max-width: 768px)

  .effect
    &.points-active
      width 300vh
      height 300vh
      visibility visible
      transition all .5s ease

.icon-github
  border 1px solid rgba(0,0,0,0)
  background transparent
  .iconx-github
    opacity 1 !important
    visibility visible !important
    transform scale(1) !important
  + .mouse2
    border-radius 50%
    width 30px
    height 30px
    background rgb(255,255,255)
    mix-blend-mode: exclusion;
    border 1px solid rgba(0,0,0,0)

.icon-linkedin
  border 1px solid rgba(0,0,0,0)
  background transparent
  .iconx-linkedin
    opacity 1 !important
    visibility visible !important
    transform scale(1) !important
  + .mouse2
    border-radius 50%
    width 30px
    height 30px
    background rgb(255,255,255)
    mix-blend-mode: exclusion;
    border 1px solid rgba(0,0,0,0)

.icon-medium
  border 1px solid rgba(0,0,0,0)
  background transparent
  .iconx-medium
    opacity 1 !important
    visibility visible !important
    transform scale(1) !important
  + .mouse2
    border-radius 50%
    width 30px
    height 30px
    background rgb(255,255,255)
    mix-blend-mode: exclusion;
    border 1px solid rgba(0,0,0,0)

.icon-twitter
  border 1px solid rgba(0,0,0,0)
  background transparent
  .iconx-twitter
    opacity 1 !important
    visibility visible !important
    transform scale(1) !important
  + .mouse2
    border-radius 50%
    width 30px
    height 30px
    background rgb(255,255,255)
    mix-blend-mode: exclusion;
    border 1px solid rgba(0,0,0,0)

.icon-stackoverflow
  border 1px solid rgba(0,0,0,0)
  background transparent
  .iconx-stackoverflow
    opacity 1 !important
    visibility visible !important
    transform scale(1) !important
  + .mouse2
    border-radius 50%
    width 30px
    height 30px
    background rgb(255,255,255)
    mix-blend-mode: exclusion;
    border 1px solid rgba(0,0,0,0)

.icon-vimeo
  border 1px solid rgba(0,0,0,0)
  background transparent
  .iconx-vimeo
    opacity 1 !important
    visibility visible !important
    transform scale(1) !important
  + .mouse2
    border-radius 50%
    width 30px
    height 30px
    background rgb(255,255,255)
    mix-blend-mode: exclusion;
    border 1px solid rgba(0,0,0,0)

.icon-codepen
  border 1px solid rgba(0,0,0,0)
  background transparent
  .iconx-codepen
    opacity 1 !important
    visibility visible !important
    transform scale(1) !important
  + .mouse2
    border-radius 50%
    width 30px
    height 30px
    background rgb(255,255,255)
    mix-blend-mode: exclusion;
    border 1px solid rgba(0,0,0,0)


.icon-active--flaticon-dribbble
  border 1px solid rgba(0,0,0,0)
  background transparent !important
  mix-blend-mode: normal !important;
  + .mouse2
    border-radius 50%
    width 30px
    height 30px
    background rgb(255,255,255)
    mix-blend-mode: exclusion;
    border 1px solid rgba(0,0,0,0)

  .flaticon-dribbble
    opacity 1
    visibility visible
    transform scale(1)

.icon-active--flaticon-instagram
  border 1px solid rgba(0,0,0,0)
  background transparent !important
  mix-blend-mode: normal !important;
  + .mouse2
    border-radius 50%
    width 30px
    height 30px
    background rgb(255,255,255)
    mix-blend-mode: exclusion;
    border 1px solid rgba(0,0,0,0)
  .flaticon-instagram
    opacity 1
    visibility visible
    transform scale(1)

.icon-active--flaticon-behance
  border 1px solid rgba(0,0,0,0)
  background transparent !important
  mix-blend-mode: normal !important;
  + .mouse2
    border-radius 50%
    width 30px
    height 30px
    background rgb(255,255,255)
    mix-blend-mode: exclusion;
    border 1px solid rgba(0,0,0,0)
  .flaticon-behance
    opacity 1
    visibility visible
    transform scale(1)

.icon-active--flaticon-github
  border 1px solid rgba(0,0,0,0)
  background transparent !important
  mix-blend-mode: normal !important;
  + .mouse2
    border-radius 50%
    width 30px
    height 30px
    background rgb(255,255,255)
    mix-blend-mode: exclusion;
    border 1px solid rgba(0,0,0,0)
  .flaticon-github
    opacity 1
    visibility visible
    transform scale(1)


.icon-hover
  transition all .3s ease
  opacity 0
  visibility hidden
  transform scale(.4)
  position absolute
  color getColor('color', 1)
  pointer-events none
  svg
    fill getColor('color', 1)
    max-width 20px
  &:before
    font-size 1rem

.mouse-scroll--x
  position absolute
  color getColor('color', 1)
  left 0px
  font-size .5rem
  opacity 0
  visibility hidden
  transition all .3s ease

.mouse-scroll--x2
  transition all .3s ease
  position absolute
  color getColor('color', 1)
  right 0px
  font-size .5rem
  opacity 0
  visibility hidden

@media screen and (max-width: 768px)
  .mouse, .mouse2
    visibility hidden !important
    opacity 0 !important

@media screen and (max-width: 812px) and (max-height: 500px) and (orientation: landscape)
  .mouse, .mouse2
    visibility hidden !important
    opacity 0 !important
</style>
