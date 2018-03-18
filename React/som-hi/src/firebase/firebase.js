import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC9yAntOg4txvvDO5zkLVhbOOrPUye4ybU",
  authDomain: "somhifirebase.firebaseapp.com",
  databaseURL: "https://somhifirebase.firebaseio.com",
  projectId: "somhifirebase",
  storageBucket: '',
  messagingSenderId: "857949037026"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};