$(document).ready(function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get()
        .then(function(doc) {
          if (
            doc.data().admin == undefined ||
            doc.data().admin == null ||
            !doc.data().admin
          )
            window.location = "/";
        });
    } else {
      window.location = "/";
    }
  });
});
