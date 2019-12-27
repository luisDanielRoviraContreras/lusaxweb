import Vue from 'vue'
import firebase from 'firebase'

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

if (!Vue.prototype.hasOwnProperty('$firebase')) {
  Vue.prototype.$firebase = firebase
}
