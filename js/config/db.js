// Initialize Firebase
var config = {
  apiKey: "AIzaSyAEZdHK98COcRt9hzxbICAPeSpXOyn0vA4",
  authDomain: "oneiros-2018.firebaseapp.com",
  databaseURL: "https://oneiros-2018.firebaseio.com",
  projectId: "oneiros-2018",
  storageBucket: "oneiros-2018.appspot.com",
  messagingSenderId: "358484877394"
};

// var config = {
//   apiKey: "AIzaSyCszYWkqAN5VQsXjrtAVB7dI7hIB-q1CQ0",
//   authDomain: "mast-project-naam.firebaseapp.com",
//   databaseURL: "https://mast-project-naam.firebaseio.com",
//   projectId: "mast-project-naam",
//   storageBucket: "mast-project-naam.appspot.com",
//   messagingSenderId: "400633154339"
// };
firebase.initializeApp(config);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

firebase.firestore().settings({
  timestampsInSnapshots: true
});
