// Initialize Firebase
var config = {
  apiKey: "AIzaSyAEZdHK98COcRt9hzxbICAPeSpXOyn0vA4",
  authDomain: "oneiros-2018.firebaseapp.com",
  databaseURL: "https://oneiros-2018.firebaseio.com",
  projectId: "oneiros-2018",
  storageBucket: "oneiros-2018.appspot.com",
  messagingSenderId: "358484877394"
};

firebase.initializeApp(config);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

firebase.firestore().settings({
  timestampsInSnapshots: true
});